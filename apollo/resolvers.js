import fetch from 'node-fetch';

function objectWithId(obj) {
  obj.id = parseInt(obj.url.split('/')[5], 10);
  return obj;
}

export const resolvers = {
  Query: {
    people: async () => {
      const resp = await fetch("https://swapi.co/api/people/")
      const data = await resp.json();
      const results = data.results.map(obj => objectWithId(obj) )
      return results;
    },
    person: async(_, args) => {
      console.log("--- HIT --- ", args)
      const resp = await fetch(`https://swapi.co/api/people/${1}`)
      const data = await resp.json();
      return data;
    }
  },
}