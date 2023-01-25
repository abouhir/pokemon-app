import React from "react";
import { getTypes } from "../services/pokemonData";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
const Type = () => {
  const { name } = useParams();
  const query = useQuery(["pokemon", name], () => getTypes(name), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (query.isLoading) return <h1>Loading...</h1>;

  if (query.data) {
    const { pokemon: pokemons } = query.data;
    return (
      <div className="container-home">
        <div className="container-button">
          {pokemons.map(({ pokemon: p }, index) => {
            return (
              <div className="link" key={index}>
                <Link className="poke-link" to={`/view/${p.name}`}>
                  {p.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default Type;
