const switchPage = () => {
  const bookListBtn = document.getElementById('list-btn');
  const addBookBtn = document.getElementById('add-book-btn');
  const contactBtn = document.getElementById('contacts-btn');
  const bookListPage = document.getElementById('list');
  const addBookPage = document.getElementById('add-books');
  const contactsPage = document.getElementById('contacts');

  // Navigation

  // Move Into The BookList Page
  bookListBtn.addEventListener('click', () => {
    bookListPage.classList.remove('none');
    addBookPage.classList.add('none');
    contactsPage.classList.add('none');
  });

  // Move Into Add Book Page
  addBookBtn.addEventListener('click', () => {
    bookListPage.classList.add('none');
    addBookPage.classList.remove('none');
    contactsPage.classList.add('none');
  });

  // Move Into Contacts Page
  contactBtn.addEventListener('click', () => {
    bookListPage.classList.add('none');
    addBookPage.classList.add('none');
    contactsPage.classList.remove('none');
  });
};

export default switchPage;