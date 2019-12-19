import gql from 'graphql-tag'

export const typeDefs = gql`
  type Person {
    url: String!
    name: String!
    hair_color: String!
    height: String!
  }
  type Query {
    people: [Person]!
  }
`