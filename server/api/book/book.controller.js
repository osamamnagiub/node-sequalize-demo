const db = require('../../models/db');

exports.allbooks = (req, res) => {
    db.Book.findAll()
        .then(book => {
            res.send(book);
        })
        .catch((error) => {
            console.log(error);
        })
}
exports.saveUserBook = (req, res) => {
    let bookId = req.body.bookId;
    let userId = req.body.userId;

    db.Book.findById(bookId)
        .then(book => {
            book.addReader(userId);
        })
        .then(() => {
            res.json({ success: 'book added for user' });

        })
        .catch((error) => {
            console.log(error);
        })
}