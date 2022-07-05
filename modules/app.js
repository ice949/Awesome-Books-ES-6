/* eslint-disable max-classes-per-file */
const addAndRemoveBook = () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const bookContainer = document.querySelector('.book-list');
  const form = document.getElementById('form');

  class AwesomeBooks {
    constructor(title, author, id) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  }

  class LocalStorage {
  // eslint-disable-next-line class-methods-use-this
    getLocalStorage() {
      let books;
      if (localStorage.getItem('books') == null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }

    setStorage(book) {
      const books = this.getLocalStorage();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }

    removeBookFromStorage(id) {
      const books = this.getLocalStorage();
      books.forEach((book, index) => {
        if (book.id === Number(id)) {
          books.splice(index, 1);
        }
      });

      localStorage.setItem('books', JSON.stringify(books));
    }
  }

  class CreateUI {
    getUI(localStorage) {
      this.books = localStorage.getLocalStorage();
      let counter = 0;
      while (counter < this.books.length) {
        this.addToUI(this.books[counter]);
        counter += 1;
      }
    }

    // eslint-disable-next-line class-methods-use-this
    addToUI(book) {
      const list = document.createElement('div');
      list.classList.add('single-book');

      const info = document.createElement('div');
      info.classList.add('info');
      list.appendChild(info);

      const bookID = document.createElement('h3');
      bookID.textContent = book.id;
      bookID.classList.add('book-id');
      info.appendChild(bookID);

      const title = document.createElement('h3');
      title.textContent = book.title;
      title.classList.add('title');
      info.appendChild(title);

      const by = document.createElement('h3');
      by.textContent = 'by';
      info.appendChild(by);

      const author = document.createElement('h3');
      author.textContent = (book.author);
      author.classList.add('author');
      info.appendChild(author);

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('remove-btn');
      removeBtn.textContent = 'Remove';
      removeBtn.setAttribute('type', 'button');
      list.appendChild(removeBtn);

      list.addEventListener('click', (e) => {
        this.remove(e.target);
        // eslint-disable-next-line no-use-before-define
        localS.removeBookFromStorage(e.target.parentElement.firstChild.firstChild.textContent);
      });

      // adding book to ul
      bookContainer.append(list);
    }

    // eslint-disable-next-line class-methods-use-this
    remove(t) {
      if (t.classList.contains('remove-btn')) {
        t.parentElement.remove();
      }
    // removeBookFromStorage(id)
    }
  }

  const localS = new LocalStorage();
  const ui = new CreateUI();

  const getVal = (title, author, id) => new AwesomeBooks(title, author, id);

  // important to hold length of local  storage
  let id = 0;

  const getIndexInLocalStorage = () => {
    const books = localS.getLocalStorage();
    // eslint-disable-next-line no-undef
    return books.length;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Add new book to local storage
    localS.setStorage(getVal(bookTitle.value, bookAuthor.value, id));

    // create a new book in DOM
    ui.addToUI(getVal(bookTitle.value, bookAuthor.value, id));

    id += 1;
    bookTitle.value = ' ';
    bookAuthor.value = ' ';
  });

  window.addEventListener('load', () => {
  // get the book list back on DOM
    ui.getUI(localS);

    // set the id var to current index value before refresh
    id = 1 + getIndexInLocalStorage();
  });
};

export default addAndRemoveBook;
