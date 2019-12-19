import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    people: async () => {
      const resp = await fetch("https://swapi.co/api/people/")
      const data = await resp.json();
      return data.results;
    },
  },
}