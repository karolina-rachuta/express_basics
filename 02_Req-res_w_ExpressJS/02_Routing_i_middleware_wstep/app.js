import fs from 'fs';
import express from 'express';

const app = express();

app.get('/books/:isbn', async function (req, res, next) {
    try {
        let isbn = req.params.isbn;
        console.log(isbn);
        if (isbn) {
            const data = await fs.readFileSync('./data/books.json')
            const books = JSON.parse(data);
            const book = books.find(b => b.isbn === isbn);
            if (book) {
                console.log()
                res.send(book)
                next()
            } else {
                console.error("ErrorKRR")
                res.status(500).json({errorBooksKRR: "book is not found"});
                next(error);
            }
        } else {
            new Error('No book found!')
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({errorBooks: error.message});
        next(error);
    }
})
app.get('/books', async function (req, res, next) {
    try {
        const data = await fs.readFileSync('./data/books.json', 'utf8');
        console.log(JSON.parse(data));
        res.json(JSON.parse(data))
        next();
    } catch
        (error) {
        console.error(error);
        res.status(500).json({error: error.message})
        next(error);
    }
})


app.listen(3000, () => {
    console.log('Listening')
})