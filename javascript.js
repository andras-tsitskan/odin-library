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

const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 295, true);

console.log(theHobbit.info());

function addBookToLibrary() {}
