// Do your work here...
const books = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");

  form.addEventListener("submit", e => {
    e.preventDefault();
    addBook();
  });
});

const addBook = () => {
  const textTitle = document.getElementById("bookFormTitle").value;
  const textAuthor = document.getElementById("bookFormAuthor").value;
  const textYear = document.getElementById("bookFormYear").value;
  const bookCompleted = document.getElementById("bookFormIsComplete").value === 'on' ? true : false;

  const generateID = new Date().getTime();

  const bookObj = generateBook(
    generateID,
    textTitle,
    textAuthor,
    Number(textYear),
    bookCompleted
  );

  books.push(bookObj)
  console.log(bookObj);
  makeBook()
};

const generateBook = (id, title, author, year, isCompleted) => {
  localStorage.setItem('id', id);
  localStorage.setItem('title', title);
  localStorage.setItem('author', author);
  localStorage.setItem('year', year);
  localStorage.setItem('isCompleted', isCompleted);

  return {
    'id' : localStorage.getItem('id'),
    'title' : localStorage.getItem('title'),
    'author' : localStorage.getItem('author'),
    'year' : localStorage.getItem('title'),
    'isCompleted' : localStorage.getItem('isCompleted')
  }
};

const makeBook = () => {
  const inCompleteBook = document.getElementById('incompleteBookList')

  for (const bookItem of books) {
    return inCompleteBook.innerHTML += `<div data-bookid="` + localStorage.getItem('id') + `" data-testid="bookItem">
    <h3 data-testid="bookItemTitle">` + localStorage.getItem('title') + `</h3>
    <p data-testid="bookItemAuthor">Penulis: {{ penulis_buku }}</p>
    <p data-testid="bookItemYear">Tahun: {{ tahun_rilis_buku }}</p>
    <div>
      <button data-testid="bookItemIsCompleteButton">{{ tombol_untuk_ubah_kondisi }}</button>
      <button data-testid="bookItemDeleteButton">{{ tombol_untuk_hapus }}</button>
      <button data-testid="bookItemEditButton">{{ tombol_untuk_edit }}</button>
    </div>
  </div>` 
  }
  
}