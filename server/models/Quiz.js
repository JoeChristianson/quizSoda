const {Schema,model} = require("mongoose")
const {QuestionSchema} = require("./Question")
const {AttemptSchema} = require("./Attempt")

const QuizSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique: false
    },
    creator:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    attempts:[AttemptSchema],
    questions:[QuestionSchema],
    dueDate:Date,
    takersEmail:[String],
    seconds: Number
})

const Quiz = model("Quiz",QuizSchema)

module.exports = {Quiz}