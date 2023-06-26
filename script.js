let myLibrary = [];
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(
    titleField.value,
    authorField.value,
    pagesField.value,
    readField.value
  );
  myLibrary.push(newBook);
}
