import gql from 'graphql-tag'

export const typeDefs = gql`
  type PokemonIndex {
    url: String!
    name: String!
  }

  type Sprite {
    front_default: String
    front_shiny: String
  }

  type Pokemon {
    sprites: Sprite
    name: String
    height: Int
  }

  type Query {
    pokemonList: [PokemonIndex]
    pokemon(name: String!): Pokemon
  }
`