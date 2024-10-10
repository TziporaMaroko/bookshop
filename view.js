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
            <a onclick="openPopUpForUpdate(${book.id})">update</a>
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
    // Generate star rating HTML based on the book rating
    const starRatingHtml = `
        <div class="stars">
            ${[1, 2, 3, 4, 5].map(n => `
                <span onclick="renderStarsRating(${n}, ${bookId})" class="star ${n <= book.rating ? 'filled' : ''}">★</span>
            `).join('')}
            <h3 id="output">Rating is: ${book.rating}/5</h3>
        </div>
    `;

    bookContainer.innerHTML = 
        `<div class="book-card">
            <p class="card-title">${book.title}</p>
            <img src="${book.imageUrl}" alt="${book.title}">       
            <div class="card-details">
                <div class="text-container">
                    <p>Price: $${book.price}</p>
                    ${starRatingHtml} <!-- Insert star rating HTML -->
                </div>
            </div>
        </div>`;

    renderStarsRating(book.rating, bookId); // initialize the star rating
}

//========functios to handle the pop up window========

//function to open a new window for creating a new book 
function openPopUpForCreate() {
    document.getElementById('pop-up-title').innerText = "Add New Book";
    //clear the feilds before opening the window
    document.getElementById('book-id').value = ''; 
    document.getElementById('book-title').value = ''; 
    document.getElementById('book-price').value = '';
    document.getElementById('stars-container').innerHTML =`<div class="stars">
    ${[1, 2, 3, 4, 5].map(n => `
        <span onclick="gfg(${n})" class="star star-pop-up">★</span>
    `).join('')}
    </div>`;
    document.getElementById('book-image-url').value = '';
    document.getElementById('book-window').style.display = 'block'; 
}

//function to open a new window for updating a book 
function openPopUpForUpdate(id) {
    const book = getBook(id); 
    if (book) {
        document.getElementById('pop-up-title').innerText = "Update Book";
        document.getElementById('book-id').value = book.id;
        document.getElementById('book-title').value = book.title;
        document.getElementById('book-price').value = book.price;
        document.getElementById('book-rating').value = book.rating;
        document.getElementById('book-image-url').value = book.imageUrl;
        document.getElementById('book-window').style.display = 'block';  
    }
}

function closePopUp() {
    document.getElementById('book-window').style.display = 'none'; 
}






// stuff to handle the star rating
// To access the stars
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");

// Function to update rating
function renderStarsRating(n, bookId) {
    const stars = document.getElementsByClassName("star");
    const output = document.getElementById("output");

    remove(); // Remove previous star styles

    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    
    output.innerText = "Rating is: " + n + "/5"; // Update the rating text

    // Update the book's rating in the global books array
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex].rating = n; // Update the rating
        saveObjToLS('books', books); // Save updated books list to local storage
    }
}

function gfg1(n) {
    const stars = document.getElementsByClassName("star-pop-up");

    remove(); // Remove previous star styles

    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
}


// To remove the pre-applied styling
function remove() {
    const stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star"; // Reset star classes to default
    }
}

function setRating(value) {
    const ratingInput = document.getElementById('book-rating');
    ratingInput.value = value; // Update the hidden input with the selected rating
    gfg(value); // Update the star rating
}
