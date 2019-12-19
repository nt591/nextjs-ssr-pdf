import { withApollo } from '../../apollo/client'
import { useRouter } from 'next/router'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const PokemonQuery = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      name
      height
      sprites {
        front_default
        front_shiny
      }
    }
  }
`

const Person = () => {
  const router = useRouter()
  const { name } = router.query
  const { data } = useQuery(PokemonQuery, {variables: { name }
  })
  if (!data) return null;

  const { pokemon } = data;

  return (
    <div>
      <p> You are looking at {pokemon.name}'s page</p>
      <p> They're typically {pokemon.height} inches tall</p>
      <p>
        Front view: <img src={pokemon.sprites.front_default}></img>
      </p>
      <p>
        Shiny view: <img src={pokemon.sprites.front_shiny}></img>
      </p>
    </div>
  )
}

export default withApollo(Person)