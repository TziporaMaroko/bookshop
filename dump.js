const Gbooks = [
    { id: 1, title: "To Kill a Mockingbird", price: 10.99, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg", rating: 5 },
    { id: 3, title: "The Great Gatsby", price: 14.99, imageUrl: "https://www.booknet.co.il/Images/Site/Products/9780141036144.jpg", rating: 4 },
    { id: 5, title: "Pride and Prejudice", price: 12.99, imageUrl: "https://readaloudrevival.com/wp-content/uploads/2016/05/Pride-and-Prejudice.png.webp", rating: 5 },
    { id: 6, title: "The Lord of the Rings", price: 29.99, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg", rating: 5 },
    { id: 7, title: "The Silent Patient", price: 15.99, imageUrl: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._SL1000_.jpg", rating: 5 },
    { id: 8, title: "The Hobbit", price: 19.99, imageUrl: "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496156647/a/76/97/166926-ml-1382781.jpg", rating: 5 },
    { id: 10, title: "The Chronicles of Narnia", price: 24.99, imageUrl: "https://m.media-amazon.com/images/I/81RuC2qCSmL._SY466_.jpg", rating: 5 },
    { id: 12, title: "Moby Dick", price: 13.99, imageUrl: "https://m.media-amazon.com/images/I/61PBBKyZ1rL._AC_UF1000,1000_QL80_.jpg", rating: 3 },
    { id: 13, title: "Jane Eyre", price: 12.99, imageUrl: "https://m.media-amazon.com/images/I/61N-UOA0alL._UF1000,1000_QL80_.jpg", rating: 4 },
    { id: 15, title: "Wuthering Heights", price: 12.99, imageUrl: "https://m.media-amazon.com/images/I/61Ap7QjGMjL._AC_UF1000,1000_QL80_.jpg", rating: 4 },
    { id: 16, title: "War and Peace", price: 20.99, imageUrl: "https://images.penguinrandomhouse.com/cover/9781400079988", rating: 4 },
    { id: 17, title: "Catch-22", price: 14.99, imageUrl: "https://m.media-amazon.com/images/I/71Ym0vDDWsL._AC_UF1000,1000_QL80_.jpg", rating: 4 },
    { id: 19, title: "Les Misérables", price: 16.99, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1411852091i/24280.jpg", rating: 5 },
    { id: 22, title: "Crime and Punishment", price: 12.99, imageUrl: "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF894,1000_QL80_.jpg", rating: 5 },
    { id: 25, title: "The Fault in Our Stars", price: 14.99, imageUrl: "https://m.media-amazon.com/images/I/61fbVx3W5cL._AC_UF1000,1000_QL80_.jpg", rating: 5 },
    { id: 28, title: "The Kite Runner", price: 13.99, imageUrl: "https://m.media-amazon.com/images/I/81IzbD2IiIL._AC_UF1000,1000_QL80_.jpg", rating: 5 },
    { id: 30, title: "A Thousand Splendid Suns", price: 12.99, imageUrl: "https://m.media-amazon.com/images/I/81hzzKPg1iL._AC_UF894,1000_QL80_.jpg", rating: 5 },
    { id: 33, title: "Where the Crawdads Sing", price: 12.99, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1582135294i/36809135.jpg", rating: 5 },
    { id: 34, title: "Educated", price: 13.99, imageUrl: "https://m.media-amazon.com/images/I/71-4MkLN5jL._SL1500_.jpg", rating: 5 },
    { id: 35, title: "Becoming", price: 15.99, imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528206996i/38746485.jpg", rating: 3 },
    { id: 37, title: "Thinking, Fast and Slow", price: 14.99, imageUrl: "https://m.media-amazon.com/images/I/61fdrEuPJwL._SL1500_.jpg", rating: 5 },
    { id: 38, title: "The Power of Habit", price: 11.99, imageUrl: "https://m.media-amazon.com/images/I/71eoUH2EngL._SY466_.jpg", rating: 4 },
    { id: 39, title: "Atomic Habits", price: 12.99, imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL.jpg", rating: 5 },
    { id: 41, title: "Dare to Lead", price: 13.99, imageUrl: "https://m.media-amazon.com/images/I/71qXI7x+mUL._AC_UF1000,1000_QL80_.jpg", rating: 5 },
    { id: 42, title: "The Immortal Life of Henrietta Lacks", price: 12.99, imageUrl: "https://m.media-amazon.com/images/I/81coyP8S-ZL._AC_UF1000,1000_QL80_.jpg", rating: 5 },
    { id: 44, title: "A Man Called Ove", price: 12.99, imageUrl: "https://letzpick.com/wp-content/uploads/2021/11/81BrTztpZML.jpg", rating: 5 },
    { id: 45, title: "Anxious People", price: 15.99, imageUrl: "https://m.media-amazon.com/images/I/810XLL7gvRL._SY342_.jpg", rating: 5 },
    { id: 46, title: "The Night Circus", price: 13.99, imageUrl: "https://www.booknet.co.il/Images/Site/Products/org/9780099554790.jpg", rating: 4 },
    { id: 47, title: "Around the World in 80 Days", price: 13.99, imageUrl: "https://m.media-amazon.com/images/I/71aKwtg9FLL._AC_UF1000,1000_QL80_.jpg", rating: 4 },
    { id: 48, title: "Oh, The Places You'll Go!", price: 13.99, imageUrl: "https://images.booksense.com/images/274/805/9780679805274.jpg", rating: 4 },
];
