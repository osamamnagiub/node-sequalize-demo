const db = require('../../models/db');


exports.allUsers = (req, res) => {
    db.User.findAll()
        .then(users => {
            res.send(users);
        })
        .catch((error) => {
            console.log(error);
        })
}

exports.singleUser = (req, res) => {
    db.User.findById(req.params.id, {
            include: [{
                model: db.Book,
                as: 'Reading',
                attributes: ['title', 'author']
            }, {
                model: db.Favorite,
                attributes: ['title']
            }]
        })
        .then(user => {
            res.send(user);
        })
        .catch((error) => {
            console.log(error);
        })
}
exports.saveUserFav = (req, res) => {

    let title = req.body.bookTitle;
    let userId = req.body.userId;

    db.Favorite.create({
            title,
            userId
        })
        .then(() => {
            res.json({ success: 'fav added for user' });

        })
        .catch((error) => {
            console.log(error);
        })
}
exports.saveUser = (req, res) => {

    let name = req.body.name;

    db.User.create({
            name,
        })
        .then((user) => {
            res.json({ user });

        })
        .catch((error) => {
            console.log(error);
        })
}