import gql from 'graphql-tag'

export const typeDefs = gql`
  type Person {
    id: String
    url: String!
    name: String!
    hair_color: String!
    height: String!
    gender: String!
    birth_year: String!
  }
  type Query {
    people: [Person]!
    person: Person!
  }
`