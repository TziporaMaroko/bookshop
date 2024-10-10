let books;
function createBook(event){

}

function getBook(id){
    return books.find(book => book.id === id);
}

function updateBook(event){

}

function deleteBook(id){
    books = books.filter(book => book.id !== id);  
    saveObjToLS('books', books);  
    renderBooks(books);  
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

