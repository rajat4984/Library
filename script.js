const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pageInput = document.querySelector(".page-input");
const readInput = document.querySelector(".read-input");
const addBtn = document.querySelector(".add-book");
const cardGroup = document.querySelector(".card-group");
var deleteBtn;
var isReadBtn;

let library = [];
function Books(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

let b1 = new Books("rajat", "Sharma", 234, true);
let b2 = new Books("manu", "rasdfsdfjat", 234, true);
let b3 = new Books("anuj", "rasdfsjat", 234, false);
let b4 = new Books("kartik", "rasdfdfjat", 234, false);
addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);
addBookToLibrary(b4);

// ------------------ NORMAL FUNCTIONS ----------------------------

const makeNewCard = (newTitle, newAuthor, newPages, isRead) => {
  //CREATING THE CARD
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h3");
  const pages = document.createElement("p");
  const newDeleteBtn = document.createElement("button");
  const isReadIcon = document.createElement("i");

  // ADDING CLASSES TO THE NEW CARD
  card.classList.add("card");
  cardBody.classList.add("card-body");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
  pages.classList.add("pages");
  newDeleteBtn.classList.add("delete-btn");

  //ADDING TEXT IN NEW CARD
  bookTitle.textContent = newTitle;
  bookAuthor.textContent = newAuthor;
  pages.textContent = `Pages: ${newPages}`;
  newDeleteBtn.textContent = "Delete";

  //APPENDING NEW CARD IN THE DOM
  cardGroup.insertAdjacentElement("afterbegin", card);
  card.appendChild(cardBody);
  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(pages);
  cardBody.appendChild(newDeleteBtn);

  deleteBtn = document.querySelectorAll(".delete-btn"); //selecting delete buttons for event lsitener

  // giving style and apedning readicon
  isReadIcon.style.float = "right";
  isReadIcon.style.cursor = "pointer";
  isReadIcon.classList.add("read-icon");
  if (isRead == true) {
    isReadIcon.classList.add("fas", "fa-check-circle");
    isReadIcon.style.color = "#74B72E";
  } else {
    isReadIcon.classList.add("fas", "fa-times-circle");
    isReadIcon.style.color = "rgb(161, 60, 60)";
    card.append(isReadIcon);
  }
  card.append(isReadIcon);
  isReadBtn = document.querySelectorAll(".read-icon");
};

const display = () => {
  library.forEach((item) => {
    makeNewCard(item["title"], item["author"], item["pages"], item["isRead"]);
  });
};

// -----------------------EVENT LISTENER FUNCTIONS ---------------------------------
const handleAddBtn = (e) => {
  e.preventDefault();

  let newBook = new Books(
    titleInput.value,
    authorInput.value,
    pageInput.value,
    readInput.checked
  );
  addBookToLibrary(newBook);
  makeNewCard(
    newBook["title"],
    newBook["author"],
    newBook["pages"],
    newBook["isRead"]
  );
};

const handleDeletebtn = (e) => {
  e.target.parentElement.parentElement.remove();
};

const handleReadBtn = (e) =>{
  if(e.target.classList.contains("fa-check-circle")){
    e.target.classList.remove("fa-check-circle")
    e.target.classList.add("fa-times-circle")
    e.target.style.color = "rgb(161, 60, 60)"
  }
  else{
    e.target.classList.remove("fa-times-circle")
    e.target.classList.add("fa-check-circle")
    e.target.style.color = "#74B72E"
  }
}

// -------------------FUNCTION CALLS------------------------------
display();

// -------------------EVENT LISTENERS-----------------------
addBtn.addEventListener("click", handleAddBtn);
deleteBtn.forEach((button) => {
  button.addEventListener("click", handleDeletebtn);
});
isReadBtn.forEach((button) => {
  button.addEventListener("click", handleReadBtn);
});
