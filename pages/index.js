import { withApollo } from '../apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link'
import { useQuery } from '@apollo/react-hooks'

const PeopleQuery = gql`
  query People {
    people {
      url
      name
    }
  }
`

const Index = () => {
  const { data } = useQuery(PeopleQuery)

  if (!data) return null;

  const { people } = data;

  if (people) {

    return (
      <div>
        { people.map(person => (
          <ul key={person.name}>
            <li>Name: {person.name} </li>
            <li>Page: <a target="_blank" href={person.url}>click here</a> </li>
          </ul>
        ))}
      </div>
    )
  }

  return null
}

export default withApollo(Index)