export default function addAndRemoveBook() {

    let books = [];
    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    const form = document.querySelector('.form');

    //Get data from the inputs and create object

    const createObject = () => {
        let book = {
            title: bookTitle.value,
            author: bookAuthor.value,
        };
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        let booksar = JSON.parse(localStorage.getItem('books'));
        books = booksar;
        console.log(book);
    }

    //Push Object to array







    // Listen to the Submit event
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        createObject();
        console.log(books);
    })

}