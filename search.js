const search = document.getElementById('searchBookTitle');

search.addEventListener('keyup', function (event) {
    const searchBook = event.target.value.toLowerCase();
    const listBooks = document.querySelectorAll('.container-book .list-item .item');

    listBooks.forEach((book) => {
        const bookTitle = book.querySelector('.inner h2').innerText.toLowerCase();
        if (bookTitle.includes(searchBook)) {
            book.style.display = 'flex';
        } else {
            book.style.display = 'none';
        }
    });
});