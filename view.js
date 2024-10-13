let currentPage = 1;
const booksPerPage = 8;

//function to return only the books on a given page
function paginateBooks(books, page) {
    const startIndex = (page - 1) * booksPerPage;
    const endIndex = page * booksPerPage;
    return books.slice(startIndex, endIndex);
}

//function to render the details of a given book
function getBookRow(book) {
    return `
        <div class="table">
            <p>${book.id}</p>
            <a onclick="renderDetails(${book.id})">${book.title}</a>
            <p>$${book.price}</p>
            <a data-translate="update" onclick="openPopUpForUpdate(${book.id})">update</a>
            <a onclick="deleteBook(${book.id})">🗑️</a>
        </div>
    `;
}

//function to render the books on the page
function renderBooks(books) {
    const paginatedBooks = paginateBooks(books, currentPage);
    const bookContainer = document.getElementById('book-list-container');
    bookContainer.innerHTML = paginatedBooks.map(getBookRow).join('');
    renderPaginationControls(books.length);
}

//functions for pagination:
function renderPaginationControls(totalBooks) {
    const totalPages = Math.ceil(totalBooks / booksPerPage);
    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const isActive = i === currentPage ? 'current-page' : '';
        paginationContainer.innerHTML += `<a class="${isActive}" onclick="goToPage(${i})">${i}</a>`;
    }
}

function goToPage(page) {
    currentPage = page;
    renderPaginationControls(books.length);
    renderBooks(books);
}

//function to render a book details 
function renderDetails(bookId) {
    book= getBook(bookId);
    const bookContainer = document.getElementById('selected-book-area');
    const starRatingHtml = generateStarRatingHtml(book.id);
    bookContainer.innerHTML = 
        `<p class="card-title">${book.title}</p>
        <img src="${book.imageUrl}" alt="${book.title}">       
        <div class="card-details">
            <div class="text-container">
                <p><span data-translate="priceLabel">Price: </span><span>  $${book.price}  </span></p>
                ${starRatingHtml} <!-- Insert star rating HTML -->
            </div>
        </div>`;

    renderStarsRating(book.rating, bookId); // initialize the star rating
    saveObjToLS('book-details', bookId); 
}

function generateStarRatingHtml(bookId) {
    return `
        <div class="stars">
        ${[1, 2, 3, 4, 5].map(n => `
            <span onclick="renderStarsRating(${n}, ${bookId})" class="star ${n <= book.rating ? 'filled' : ''}">★</span>
        `).join('')}
        <h3 id="output">
            <span data-translate="ratingLabel">Rating is:</span> <span id="book-rating-output">${book.rating}/5</span>
        </h3>        
        </div>
    `;
}

function renderEmptyBookDetails() {
    document.getElementById('selected-book-area').innerHTML = `<h2>No book selected:(</h2>`;
}

//---------functios to handle the pop up windw-----------
//function to open a new window for creating a new book 
function openPopUpForCreate() {
    document.getElementById('pop-up-title').innerText = "Add New Book";
    //clear the feilds before opening the window
    document.getElementById('book-id').value = ''; 
    document.getElementById('book-title').value = ''; 
    document.getElementById('book-price').value = '';
    document.getElementById('stars-container').innerHTML =`<div class="stars">
    ${[1, 2, 3, 4, 5].map(n => `
        <span onclick="renderStarsForPopUpWindow(${n})" class="star-pop-up">★</span>
    `).join('')}
    </div>`;
    document.getElementById('book-rating').value = 0;
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
        document.getElementById('stars-container').innerHTML =`<div class="stars">
        ${[1, 2, 3, 4, 5].map(n => `
            <span onclick="renderStarsForPopUpWindow(${n})" class="star-pop-up">★</span>
        `).join('')}
        </div>`;
        document.getElementById('book-image-url').value = book.imageUrl;
        document.getElementById('book-window').style.display = 'block'; 
        renderStarsForPopUpWindow(book.rating); // initialize the star rating 
    }
}

function closePopUp() {
    document.getElementById('book-window').style.display = 'none'; 
}

// ----------functions to handle the star rating-----------
// Function to update rating
function renderStarsRating(n, bookId) {
    const stars = document.getElementsByClassName("star");
    const output = document.getElementById("book-rating-output");

    remove(); // Remove previous star styles
    let cls;
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    
    output.innerText =  n + "/5"; 

    // Update the book's rating in the global books array
    const bookIndex = books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex].rating = n; 
        saveObjToLS('books', books); 
    }
}

// Function to update rating when clicked in the pop-up window
function renderStarsForPopUpWindow(n) {
    const stars = document.getElementsByClassName("star-pop-up");
    const hiddenRating = document.getElementById("book-rating");

    removePopUp(); // Remove previous star styles
    let cls;
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star-pop-up " + cls;
    }
    
    hiddenRating.value = n; // Update the hidden input with the selected rating
}

//functions to remove the pre-applied styling
function remove() {
    const stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star"; // Reset star classes to default
    }
}

function removePopUp() {
    const stars = document.getElementsByClassName("star-pop-up");
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star-pop-up"; // Reset star classes to default
    }
}

//----------functions to handle the page translation-----------
//function to translate the page
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[key][language];
    });
    if (language === "he") {
        document.body.style.fontFamily = "'Fredoka', sans-serif"; 
    }
}

// Function to change language and font based on combo box selection
function changeLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    
    if (selectedLanguage === "he") {
        document.body.style.fontFamily = "'Fredoka', sans-serif"; 
    } else {
        document.body.style.fontFamily = "'Outfit', sans-serif"; 
    }
    
    setLanguage(selectedLanguage);
}

// Function to set the language and save it in localStorage
function setLanguage(language) {
    localStorage.setItem('preferredLanguage', language);
    translatePage(language);
}
