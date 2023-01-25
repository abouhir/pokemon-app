import React from "react";
import { getPokemon } from "../services/pokemonData";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import "../styles/view.css";
import handImage from "../assets/hand-ball-poke.jpg";

const View = () => {
  const { name } = useParams();
  const query = useQuery(["pokemon", name], () => getPokemon(name), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (query.isLoading) return <h1>Loading...</h1>;

  if (query.data) {
    const {
      name,
      types,
      sprites: {
        other: {
          dream_world: { front_default: image },
        },
      },
    } = query.data;
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img src={image} />
          </div>
          <div className="card-body">{name}</div>
          <div className="line"></div>
          <div className="card-footer">
            {types.map(({ type }, index) => {
              return (
                <Link
                  className="poke-link"
                  key={index}
                  to={`/type/${type.name}`}
                >
                  {type.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="lamp-ball">
          <div className="lamp"></div>
          <img className="hand-poke" src={handImage} />
        </div>
      </div>
    );
  }
};

export default View;
