import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    pokemonList: async () => {
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await resp.json();
        return data.results;
    },
    pokemon: async(_, { name }) => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await resp.json();
      return data;
    }
  },
}