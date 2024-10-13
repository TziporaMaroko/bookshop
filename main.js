
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
    // language translation check and apply
    const language = localStorage.getItem('preferredLanguage') || 'en';
    document.getElementById('language-select').value = language;
    translatePage(language); 
} 

main();