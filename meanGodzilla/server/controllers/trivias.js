const mongoose = require("mongoose")
const Trivia = mongoose.model("Trivia")

module.exports = {
    index: (req, res, next) => {
        Trivia.find()
        .then(data => res.json(data))
        .catch(err => {res.status(500).json(err)})
    },
    add: (req, res, next) => {
        console.log(req.body);
        var newTrivia = new Trivia(req.body);
        newTrivia.save()
        .then(() => {
            res.json(true)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }
}
