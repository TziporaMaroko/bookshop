let books;  // Array to store the list of books
let currentBookId;  // Stores the ID of the currently selected book

// Creates a new book and adds it to the list
function createBook({title, price, imageUrl, rating}) {
    const id = books.length ? books[books.length - 1].id + 1 : 1;  // Generate new ID
    const newBook = { id, title, price, imageUrl, rating };
    
    books.push(newBook);  // Add new book to the array
    saveObjToLS('books', books);  // Save updated list to localStorage
    sortByTitle();  // Sort by title (alphabetical)
    sortByPrice();  // Sort by price (low to high)
    renderBooks(books);  // Render the updated book list on the page
    closePopUp();  // Close the book form pop-up window
}

// Retrieves a book by ID
function getBook(id) {
    return books.find(book => book.id === id);
}

// Updates an existing book's details
function updateBook({ id, title, price, imageUrl, rating }) {
    const bookIndex = books.findIndex(book => book.id == id);

    if (bookIndex !== -1) {  // If the book exists, update it
        books[bookIndex] = { id, title, price, imageUrl, rating };  
        saveObjToLS('books', books);  // Save updated book list to localStorage
        sortByTitle();
        sortByPrice();
        renderBooks(books);  // Render the updated list
        renderDetails(Number(id));  // Update book details section
        closePopUp();  // Close the update form
    } else {
        alert('Book not found!');  // Error if book ID doesn't exist
    }
}

// Deletes a book from the list by ID
function deleteBook(id) {
    books = books.filter(book => book.id !== id);  // Filter out the book by ID
    saveObjToLS('books', books);  // Save updated book list to localStorage
    renderBooks(books);  // Render the updated book list
    renderEmptyBookDetails();  // Clear the details section
}

// Retrieves an object from localStorage by key
function getObjFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

// Saves an object to localStorage by key
function saveObjToLS(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

// Removes an item from localStorage by key
function removeItemFromLS(key) {
    localStorage.removeItem(key);
}

// Saves a new or updated book, based on the presence of an ID
function saveBook(event) {
    event.preventDefault();
    const id = document.getElementById('book-id').value;
    const title = document.getElementById('book-title').value;
    const price = parseFloat(document.getElementById('book-price').value);
    const rating = parseFloat(document.getElementById('book-rating').value);
    const imageUrl = document.getElementById('book-image-url').value;

    if (id) {  // If ID exists, update the book
        updateBook({id, title, price, imageUrl, rating});
    } else {  // Otherwise, create a new book
        createBook({title, price, imageUrl, rating});
    }
}

// Loads a predefined set of book data into localStorage
const loadDumpData = () => {
    books = Gbooks;  // Assign predefined book data
    saveObjToLS('books', books);
    renderBooks(books);
}

// Sorts the book list by title (alphabetical) and toggles sorting state
let isTitleSorted = false; 
let isPriceSorted = false; 

const sortByTitle = () => {
    if (!isTitleSorted) {
        books.sort((a, b) => a.title.localeCompare(b.title));  // Sort alphabetically
        isTitleSorted = true;
        isPriceSorted = false;
    } else {
        resetBooks();  // Revert to original order
        isTitleSorted = false; 
    }
    renderBooks(books); 
};

// Sorts the book list by price and toggles sorting state
const sortByPrice = () => {
    if (!isPriceSorted) {
        books.sort((a, b) => a.price - b.price);  // Sort by price ascending
        isPriceSorted = true;
        isTitleSorted = false; 
    } else {
        resetBooks();  // Revert to original order
        isPriceSorted = false; 
    }
    renderBooks(books); 
}

// Resets the book list to its original unsorted state
function resetBooks() {
    books = getObjFromLS('books');  // Retrieve original book list
    renderBooks(books);
}
