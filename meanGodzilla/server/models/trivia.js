const mongoose = require('mongoose');

const TriviaSchema = mongoose.Schema({
    name: String,
    question: String,
    correcA: String,
    fakeOneA: String,
    fakeTwoA: String,

}, { timestamps: true })

mongoose.model("Trivia", TriviaSchema)
