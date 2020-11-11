

const fetch = function (type, value) {
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${type}:${value}`, function (response) {
        response.items.forEach(item => console.log(`title: ${item.volumeInfo.title}, authors: ${item.volumeInfo.authors}`));
    })
}

//fetch('isbn', '9782806269171')
fetch("title", "How to Win Friends and Influence People")