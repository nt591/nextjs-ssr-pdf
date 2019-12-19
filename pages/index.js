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
        { people.map(person => {
          const urlSegments = person.url.split("/");
          const personId = urlSegments[urlSegments.length - 2];
          return (
            <ul key={person.name}>
              <li>Name: {person.name} </li>

              <li>
                <Link href="/person/[id]" as={`/person/${personId}`}>
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