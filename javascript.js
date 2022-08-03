"use strict";

let myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.isRead ? "already read" : "not read yet"
  }`;
};

// Add initial dummy content to simulate existing storage.

const book1 = new Book(
  "And Then There Were None",
  "Agatha Christie",
  264,
  false
);
const book2 = new Book(
  "The Little Prince",
  "Antoine de Saint-Exupéry",
  96,
  true
);
const book3 = new Book("Dune", "Frank Herbert", 658, false);
const book4 = new Book(
  "Murder on the Orient Express",
  "Agatha Christie",
  274,
  true
);
const book5 = new Book(
  "The Old Man and the Sea",
  "Ernest Hemingway",
  96,
  false
);
const book6 = new Book("To Kill a Mockingbird", "Harper Lee", 336, true);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);
myLibrary.push(book4);
myLibrary.push(book5);
myLibrary.push(book6);

function createCard(book) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.dataset.bookId = myLibrary.indexOf(book);

  const cardGrid = document.querySelector(".card-grid");
  cardGrid.appendChild(newCard);
}

function createTitleField(content) {
  const heading = document.createElement("h2");
  heading.textContent = content;

  const lastCard = [...document.querySelectorAll(".card")].at(-1);
  lastCard.appendChild(heading);
}

function createAuthorField(content) {
  const authorField = document.createElement("p");
  authorField.textContent = `by ${content}`;

  const lastCard = [...document.querySelectorAll(".card")].at(-1);
  lastCard.appendChild(authorField);
}

function createPagesField(content) {
  const pagesField = document.createElement("p");
  pagesField.textContent = `${content} pages`;

  const lastCard = [...document.querySelectorAll(".card")].at(-1);
  lastCard.appendChild(pagesField);
}

function createReadStateField(content) {
  const readStateField = document.createElement("p");
  readStateField.classList.add("js-read-state-field", "book-read-state");

  if (content) {
    readStateField.textContent = "read";
  } else {
    readStateField.textContent = "not read";
  }

  const lastCard = [...document.querySelectorAll(".card")].at(-1);
  lastCard.appendChild(readStateField);
}
