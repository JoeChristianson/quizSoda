const {User,Quiz} = require("../models")
const { signToken } = require('../utils/auth');

const mutations = {
    register : async (parent,{name,email,password})=>{
        try{
            const user = await User.create({name,email,password})
            return user
        }catch(err){
            console.log(err)
        }
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
        const token = signToken(user);
        return { token, user };
      },
      newQuiz : async (parent,{creator,name,questions,dueDate,seconds})=>{
        const quiz = await Quiz.create({name,creator,attempts:[],questions,dueDate,takersEmail:[],seconds})
        const user = await User.findById(creator);
        user.quizzesMade.push(quiz._id);
        user.save()
        return quiz
      },
      takeQuiz : async (parent,{userId,quizId,answers,date})=>{
        const attempt = {taker:userId,answers,date};
        const quiz = await Quiz.findById(quizId);
        quiz.attempts.push(attempt);
        quiz.save()
        return quiz
      }
}

module.exports = mutations