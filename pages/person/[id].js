import { withApollo } from '../../apollo/client'
import { useRouter } from 'next/router'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const PersonQuery = gql`
  query Person($id: String!) {
    person(id: $id) {
      name
      hair_color
      birth_year
      gender
      height
    }
  }
`

const Person = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(" -- ID -- ", id)
  debugger
  const { data } = useQuery(PersonQuery, {variables: { id }
  })
  if (!data) return null;

  const { person } = data;

  return (
    <div>
      <p> You are looking at {person.name}'s page</p>
      <p> They were born in {person.birth_year}</p>
    </div>
  )
}

export default withApollo(Person)