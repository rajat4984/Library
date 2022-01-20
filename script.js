const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const pageInput = document.querySelector(".page-input");
const readInput = document.querySelector(".read-input");
const addBtn = document.querySelector(".add-book");
const cardGroup = document.querySelector(".card-group");
const deleteBtn = document.querySelector(".delete-btn");

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

let b1 = new Books("rajat", "Sharma", 234, "yes");
let b2 = new Books("manu", "rasdfsdfjat", 234, "yes");
let b3 = new Books("anuj", "rasdfsjat", 234, "yes");
let b4 = new Books("kartik", "rasdfdfjat", 234, "yes");
addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);
addBookToLibrary(b4);

const makeNewCard = (newTitle, newAuthor, newPages, isRead) => {
  const card = document.createElement("div");
  const cardBody = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h3");
  const pages = document.createElement("p");
  const newDeleteBtn = document.createElement("button");

  card.classList.add("card");
  cardBody.classList.add("card-body");
  bookTitle.classList.add("book-title");
  bookAuthor.classList.add("book-author");
  pages.classList.add("pages");
  newDeleteBtn.classList.add("delete-btn");

  bookTitle.textContent = newTitle;
  bookAuthor.textContent = newAuthor;
  pages.textContent = `Pages: ${newPages}`;
  newDeleteBtn.textContent = "Delete";

  cardGroup.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(bookTitle);
  cardBody.appendChild(bookAuthor);
  cardBody.appendChild(pages);
  cardBody.appendChild(newDeleteBtn);
};

const handleAddBtn = (e) => {
  e.preventDefault();
  let newBook = new Books(titleInput.value, authorInput.value, pageInput.value);
  library.push(newBook);
  makeNewCard(newBook["title"], newBook["author"], newBook["pages"]);
};

const display = () => {
  library.forEach((item) => {
    makeNewCard(item["title"], item["author"], item["pages"]);
  });
};

display();

addBtn.addEventListener("click", handleAddBtn);
