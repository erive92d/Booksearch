const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    authors: [String]
    description: String
    bookId: Int
    image: String
    link: String
    title: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(
      authors: String!
      description: String!
      bookId: Int!
      image: String!
      link: String!
      title: String!
    ): Book
  }
`;

module.exports = typeDefs;
