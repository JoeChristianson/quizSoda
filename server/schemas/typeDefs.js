const {gql} = require("apollo-server-express")
const {GraphQLFloat} = require("graphql")



const typeDefs = gql`

input QuestionInput {
  question:String!
  correctAnswer:String!
  otherOptions:[String]
}

type User {
    _id: ID!
    name: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Quiz {
    _id: ID!
    name: String!
    creator: User
    attempts: [Attempt]
    questions: [Question]
    dueDate: String
    takersEmail:[String]
    seconds: Int!
  }

  type StudentQuiz {
    name: String!
    creator: User
    questions: [StudentQuestions]
    dueDate: String
    seconds: Int!
  }

  type Attempt {
    taker:User
    answers: [String]
    date:String
  }

  type Question {
    question:String
    correctAnswer:String
    otherOptions:[String]
  }

  type StudentQuestions {
    question:String
    options: [String]
  }

  type Query{
    allUsers:[User]
    getTeacherQuiz(id: ID!):Quiz
    getStudentQuiz(id: ID!): StudentQuiz
  }

  type Mutation {
      register(name: String!, email: String!, password: String!):User
      login(email:String!,password:String):Auth
      newQuiz(creator:ID!,name:String!,questions:[QuestionInput],dueDate:String,seconds:Int!):Quiz
    }

`

module.exports = {typeDefs}