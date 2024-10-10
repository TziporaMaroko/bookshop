let currentPage = 1;
const booksPerPage = 10;

//function to return only the books on a given page
function paginateBooks(books, page) {
    const startIndex = (page - 1) * booksPerPage;
    const endIndex = page * booksPerPage;
    return books.slice(startIndex, endIndex);
}

function getBookRow(book) {
    return `
        <div class="table">
            <p>${book.id}</p>
            <a onclick="renderDetails(${book.id})">${book.title}</a>
            <p>$${book.price}</p>
            <a onclick="updateWindow(${book.id})">update</a>
            <a onclick="deleteBook(${book.id})">🗑️</a>
        </div>
    `;
}

function renderBooks(books) {
    const paginatedBooks = paginateBooks(books, currentPage);
    const bookContainer = document.getElementById('book-list-container');
    bookContainer.innerHTML="";
    paginatedBooks.forEach(book => {
        bookContainer.innerHTML += getBookRow(book);
    });

    renderPaginationControls(books.length);
}

function renderPaginationControls(totalBooks) {
    const totalPages = Math.ceil(totalBooks / booksPerPage);
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        paginationContainer.innerHTML += `<a onclick="goToPage(${i})">${i}</a> `;
    }
}

function goToPage(page) {
    currentPage = page;
    renderBooks(books);
}

function renderDetails(bookId) {
    book= getBook(bookId);
    const bookContainer = document.getElementById('selected-book-area');
    bookContainer.innerHTML = 
        `<div class="book-card">
            <p class="card-title">${book.title}</p>
            <div class="card-details">
                <img src="${book.imageUrl}" alt="${book.title}">
                <div class="text-container">
                    <p>price:$${book.price}</p>
                    <a onclick="updateWindow(${book.id})">update</a>
                </div>
            </div>
        </div>`
}