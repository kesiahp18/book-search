const { gql } = require('apollo-server-express');

const typeDefs  = gql`
type Book {
   bookId: ID!
   authors: [String]
   description: String
   title: String
   image: String
   link: String
}
input BookData {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
 }
type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    bookCount: Int
    savedBooks: [Book]
}
type Query {
    me: User
}
type Mutation {
    login (email:String!, password:String!): Auth
    addUser(username:String!, email:String!, password: String!): Auth
    saveBook(bookData:BookData!): User
    removeBook(bookId:ID!): User 
}
type Auth {
    token: ID!
    user: User 
}
`

module.exports = typeDefs;