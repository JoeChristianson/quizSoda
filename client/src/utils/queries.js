import { gql} from "@apollo/client"

export const GET_STUDENT_QUIZ = gql`
query GetStudentQuiz($getStudentQuizId: ID!) {
    getStudentQuiz(id: $getStudentQuizId) {
      name
      questions {
        question
        options
      }
      dueDate
      seconds
      quiz
    }
  }
`