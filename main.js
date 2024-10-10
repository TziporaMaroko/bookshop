
function main(){
    books = getObjFromLS('books');
    if (books === null) {
        saveObjToLS('books', Gbooks);
        books = Gbooks;
    }
    
    renderBooks(books);
} 

main();