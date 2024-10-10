function getBookRow(book) {
    return `
        <div class="table">
            <p>${book.id}</p>
            <p>${book.title}</p>
            <p>$${book.price}</p>
            <a onclick="updateWindow(${book.id})">update</a>
            <a onclick="deleteBook(${book.id})">🗑️</a>
        </div>
    `;
}

function renderBooks(books) {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ``;
    
    books.forEach(book => {
        bookContainer.innerHTML += getBookRow(book);
    });
}