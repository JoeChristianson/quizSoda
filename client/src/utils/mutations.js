import { gql } from '@apollo/client';

export const REGISTER = gql`
mutation register($name: String!, $email: String!, $password: String!) {
  register(name: $name, email: $email, password: $password) {
    _id
    name
    email
  }
}
`;

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
      email
    }
  }
}
`;

export const TAKE_QUIZ = gql`
mutation Mutation($userId: ID!, $quizId: ID!, $answers: [String], $date: String) {
  takeQuiz(userId: $userId, quizId: $quizId, answers: $answers, date: $date) {
    _id
    name
    dueDate
    seconds
  }
}
`