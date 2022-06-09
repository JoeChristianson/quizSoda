const {Schema,model} = require("mongoose")

const QuestionSchema = new Schema({
    question: String,
    correctAnswer:String,
    otherOptions:[String]
})

module.exports = {QuestionSchema}