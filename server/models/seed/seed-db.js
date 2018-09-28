const db = require('../db');
const USERS = require('./users.json')
const BOOKS = require('./books.json');


module.exports = {
    insert: () => {
        db.User.bulkCreate(USERS)
            .then(() => {
                db.Book.bulkCreate(BOOKS)
                    .then(() => {
                        console.log('success adding users and books');
                    })
            })
            .catch(console.log);
    }
}