let books;
let currentBookId;
function createBook({title, price, imageUrl, rating}){
    const id = books.length ? books[books.length - 1].id + 1 : 1;
    const newBook = { id, title, price, imageUrl, rating };
    
    books.push(newBook);  
    saveObjToLS('books', books);  
    renderBooks(books);
    closePopUp();   
}

function getBook(id){
    return books.find(book => book.id === id);
}

function updateBook({ id, title, price, imageUrl, rating }){
    const bookIndex = books.findIndex(book => book.id == id);

    if (bookIndex !== -1) {
        books[bookIndex].title = title;
        books[bookIndex].price = price;
        books[bookIndex].imageUrl = imageUrl;
        books[bookIndex].rating = rating;  
        saveObjToLS('books', books);  
        renderBooks(books); 
        renderDetails(Number(id));
        closePopUp();  
    }
    else {
        alert('Book not found!');
    }
}

function deleteBook(id){
    books = books.filter(book => book.id !== id);  
    saveObjToLS('books', books);  
    renderBooks(books); 
    renderEmptyBookDetails(); 
}

function getObjFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}
function saveObjToLS(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}  
function removeItemFromLS(key) {
    localStorage.removeItem(key);
} 

function saveBook(event) {
    event.preventDefault();

    const id = document.getElementById('book-id').value;
    const title = document.getElementById('book-title').value;
    const price = parseFloat(document.getElementById('book-price').value);
    const rating = parseFloat(document.getElementById('book-rating').value);
    const imageUrl = document.getElementById('book-image-url').value;

    if (id) {
        // Update existing book
        updateBook({id, title, price, imageUrl, rating});
    } else {
        // Create new book
        createBook({title, price, imageUrl, rating});
    }
}

const loadDumpData = ()=> {
    books = Gbooks;
    saveObjToLS('books', books);
    renderBooks(books);
}
// stuff to handle the sort functionality
let isTitleSorted = false; 
let isPriceSorted = false; 

const sortByTitle = ()=> {
    if (!isTitleSorted) {
        books.sort((a, b) => a.title.localeCompare(b.title));
        isTitleSorted = true;
        isPriceSorted = false;
    } else {
        resetBooks(); // Reset to original unsorted state
        isTitleSorted = false; 
    }
    renderBooks(books); 
};

const sortByPrice = ()=> {
    if (!isPriceSorted) {
        books.sort((a, b) => a.price - b.price);
        isPriceSorted = true;
        isTitleSorted = false; 
    } else {
        resetBooks(); 
        isPriceSorted = false; 
    }
    renderBooks(books); 
}

function resetBooks() {
    books = getObjFromLS('books'); 
    renderBooks(books);
}