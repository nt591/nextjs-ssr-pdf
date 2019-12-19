import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

const PokemonQuery = gql`
  query Pokemon {
    pokemonList {
      url
      name
  }
}
`

const Index = () => {
  const { data } = useQuery(PokemonQuery)
  if (!data) return null;

  const { pokemonList: pokemon } = data;

  if (pokemon) {
    return (
      <div>
        { pokemon.map(poke => {
          return (
            <ul key={poke.name}>
              <li>Name: {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)} </li>
              <li>
                <Link href="/pokemon/[name]" as={`/pokemon/${poke.name}`}>
                  <a target="_blank">Link to Page</a>
                </Link>
              </li>
            </ul>
          )
        })
      }
      </div>
    )
  }

  return null
}

export default withApollo(Index)