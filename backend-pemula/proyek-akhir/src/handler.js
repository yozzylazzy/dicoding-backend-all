const { nanoid } = require('nanoid');
const books = require('./books');

const addBookHandler = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;
  const id = nanoid(16);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const finished = pageCount === readPage;
  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  if (name !== undefined && name !== '' && readPage <= pageCount) {
    books.push(newBook);
  }
};

const getAllBooksHandler = () => {

};

const getBookByIdHandler = (request, h) => {

};

const editBookByIdHandler = (request, h) => {

};

const deleteBookByIdHandler = (request, h) => {

};

module.exports = {
  addBookHandler,
};
