const titleInput = document.querySelector(".title-input")
const authorInput = document.querySelector(".author-input")
const pageInput = document.querySelector(".page-input")
const readInput = document.querySelector(".read-input")
const addBtn = document.querySelector(".add-book")


const handleAddBtn = () =>{
    console.log(titleInput.value,authorInput.value,pageInput.value)
}


addBtn.addEventListener("click",handleAddBtn)



let library = [];
function Books(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

let b1 = new Books("rajat", "rajat", 234, "yes");
let b2 = new Books("beb", "rajat", 234, "yes");
let b3 = new Books("rajat", "rajat", 234, "yes");
let b4 = new Books("rajat", "rajat", 234, "yes");
addBookToLibrary(b1);
addBookToLibrary(b2);
addBookToLibrary(b3);
addBookToLibrary(b4);

// library.forEach((item) =>{
//     console.log(item["name"])
// })
