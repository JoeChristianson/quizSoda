const {User, Quiz} = require("../models");
const { shuffleOptions } = require("../utils/quizHelpers");

const queries = {
    allUsers : async ()=>{
        const users = await User.find()
        return users
    },
    getTeacherQuiz: async (parent,{id})=>{
        const quiz = await Quiz.findById(id);
        console.log(quiz)
        return quiz
    },
    getStudentQuiz: async (parent,{id})=>{
        const quiz = await Quiz.findById(id)
        const studentQuiz = {
            name:quiz.name,
            creator:quiz.creator,
            questions:quiz.questions.map(q=>{
                return {
                    question:q.question,
                    options:shuffleOptions([q.correctAnswer,...q.otherOptions])
                }
            }),
            dueDate:quiz.dueDate,
            seconds:quiz.seconds
        }
        return studentQuiz
    }
}

module.exports = queries