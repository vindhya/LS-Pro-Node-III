const express = require('express');
const books = require('./books');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/books', (req, res) => {
	res.send(books);
});

app.get('/book/:id', (req, res) => {
	books.forEach(book => {
		if (book.id === parseInt(req.params.id)) res.send(book);
	})
})

app.post('/newbook', (req, res) => {
	const newBook = req.body;
	newBook.id = books[books.length - 1].id + 1;
	books.push(newBook);
});

app.listen(3000, () => {
	console.log('app listening on port 3000');
});