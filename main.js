
function main(){
    books = getObjFromLS('books');
    currentBookId = getObjFromLS('book-details');
    if (books === null) {
        saveObjToLS('books', Gbooks);
        books = Gbooks;
    }
    
    renderBooks(books);

    if (currentBookId != null) {
        renderDetails(Number(currentBookId));
    } 
    
} 

main();