let myLibrary = [];
let entryNumber = 0;
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");

function Book(title, author, pages, read, entryNumberLocal) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.entryNumber = entryNumberLocal;
  this.toggleRead = function () {
    const currentState = this.read;
    this.read = !currentState;
  };
}

function addBookToLibrary(e) {
  entryNumber++;
  const newBook = new Book(
    titleField.value,
    authorField.value,
    pagesField.value,
    readField.checked,
    entryNumber
  );
  myLibrary.push(newBook);
  displayBooks();
  e.preventDefault();
  closeForm();
}

function displayBooks() {
  const cardGrid = document.querySelector(".cardGrid");
  for (let i = 0; i < myLibrary.length; i++) {
    addCard(i, cardGrid);
  }
}

function isCreated(index) {
  const targetElement = document.querySelector(
    `[data-entry-number="${myLibrary[index].entryNumber}"]`
  );
  if (targetElement == null) {
    return false;
  } else {
    return true;
  }
}

function addCard(i, parentElement) {
  if (isCreated(i)) {
  } else {
    const card = document.createElement("div");
    card.dataset.entryNumber = myLibrary[i].entryNumber;
    card.classList.add("card");
    createButton("X", "cardRemove", removeCard, card);
    addLineInfo(myLibrary[i].title, "Title: ", card, "cardText");
    addLineInfo(myLibrary[i].author, "Author: ", card, "cardText");
    addLineInfo(myLibrary[i].pages, "Pages: ", card, "cardText");
    addLineInfo(myLibrary[i].read, "Read: ", card, "cardText");
    createButton("Mark as Read/Unread", "toggleRead", toggleRead, card);
    parentElement.appendChild(card);
  }
}

function createButton(buttonText, className, clickFunction, parentElement) {
  const newButton = document.createElement("button");
  newButton.textContent = buttonText;
  newButton.classList.add(className);
  newButton.addEventListener("click", clickFunction);
  parentElement.appendChild(newButton);
}

function toggleRead(e) {
  const parentElement = e.target.parentElement;
  const targetEntryNumber = parentElement.dataset.entryNumber;
  const targetElement = parentElement.querySelector("div:last-of-type");
  const targetLibraryIndex = myLibrary.findIndex(
    (book) => book.entryNumber == targetEntryNumber
  );
  const readState = myLibrary[targetLibraryIndex].read;
  targetElement.textContent = "Read: " + !readState;
  myLibrary[targetLibraryIndex].toggleRead();
}

function removeCard(e) {
  const targetElement = e.target.parentElement;
  const targetEntryNumber = targetElement.dataset.entryNumber;
  targetElement.remove();
  const targetLibraryIndex = myLibrary.findIndex(
    (book) => book.entryNumber == targetEntryNumber
  );
  myLibrary.splice(targetLibraryIndex, 1);
}

function addLineInfo(contentText, labelText, parentElement, elementClass) {
  const element = document.createElement("div");
  element.classList.add(elementClass);
  element.textContent = labelText + contentText;
  parentElement.appendChild(element);
}

function closeForm() {
  const formAddBook = document.querySelector(".formAddBackground");
  formAddBook.style.visibility = "hidden";
}

function openForm() {
  const formAddBook = document.querySelector(".formAddBackground");
  formAddBook.style.visibility = "visible";
}

function initializeClicks() {
  const openFormButton = document.querySelector("button.formopen");
  const closeFormButton = document.querySelector("button.formclose");
  const addBookButton = document.querySelector("button.addbook");
  openFormButton.addEventListener("click", openForm);
  closeFormButton.addEventListener("click", closeForm);
  addBookButton.addEventListener("click", addBookToLibrary);
}

initializeClicks();
