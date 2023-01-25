export const getPokemonsNext = async (key, nextUrl) => {
  console.log(key);
  console.log("nextUrl", nextUrl);
  const data = await fetch(key);
  return data.json();
};

export const getPokemon = async (id, nextUrl) => {
  const path = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const data = await fetch(path);
  return data.json();
};

export const getTypes = async (id, nextUrl) => {
  const path = `https://pokeapi.co/api/v2/type/${id}`;
  const data = await fetch(path);
  return data.json();
};
