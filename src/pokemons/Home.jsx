import React, { useState } from "react";
import { getPokemonsNext } from "../services/pokemonData";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import "../styles/home.css";
import logo from "../assets/Pokemon_logo.png";
import {
  Text,
  Spinner,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
} from "@chakra-ui/react";
const Home = () => {
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  let query = useQuery(["pokemons", next], () => getPokemonsNext(next), {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  if (query.isLoading) return <h1>Loading...</h1>;

  if (!query.data) {
    return <p>Problemes</p>;
  } else {
    const pokemons = query.data.results;
    return (
      <div className="container-home">
        <img width="400px" height="100px" src={logo} />
        <div className="container-button">
          {pokemons.map((p, index) => {
            return (
              <div className="link" key={index}>
                <Link className="poke-link" to={`view/${p.name}`}>
                  {p.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="action-buttons">
          <button
            className="button-action"
            onClick={() => {
              query.data.previous === null
                ? console.log("no next")
                : setNext(query.data.previous);
            }}
            disabled={query.data.previous === null}
          >
            &lt;
          </button>

          <button
            className="button-action"
            onClick={() => {
              query.data.next === null
                ? console.log("no next")
                : setNext(query.data.next);
            }}
            disabled={query.data.next === null}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
};

export default Home;
