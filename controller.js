let books;
function createBook(event){

}

function readBook(event){

}

function updateBook(event){

}

function deleteBook(id){

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

