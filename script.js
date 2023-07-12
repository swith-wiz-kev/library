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

function displayBooks() {
  const cardGrid = document.querySelector(".cardGrid");
  for (let i = 0; i < myLibrary.length; i++) {
    addCard(i, cardGrid);
  }
}

function addCard(i, parentElement) {
  const card = document.createElement("div");
  card.classList.add("card");
  addLineInfo(myLibrary[i].title, "Title: ", card, "cardText");
  addLineInfo(myLibrary[i].author, "Author: ", card, "cardText");
  addLineInfo(myLibrary[i].pages, "Pages: ", card, "cardText");
  addLineInfo(myLibrary[i].read, "Read: ", card, "cardText");
  parentElement.appendChild(card);
}

function addLineInfo(contentText, labelText, parentElement, elementClass) {
  const element = document.createElement("div");
  element.classList.add(elementClass);
  element.textContent = labelText + contentText;
  parentElement.appendChild(element);
}
