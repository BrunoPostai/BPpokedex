import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []); // O [] faz com que o useEffect seja usado apenas quando o pokedex for montado
  const getPokemons = () => {
    var endPoints = [];
    for (var i = 1; i <= 200; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    console.log(endPoints);
    var response = axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then((res) => setPokemons(res))
      .catch((err) => console.log(err));
  };
  const typeColors = {
    normal: "bg-gray-100",
    flying: "bg-gray-500",
    fire: "bg-orange-400",
    water: "bg-blue-400",
    grass: "bg-green-400",
    bug: "bg-lime-400",
    poison: "bg-violet-400",
    electric: "bg-yellow-400",
    ground: "bg-amber-600",
    fairy: "bg-pink-200",
    dark: "bg-neutral-800",
    fighting: "bg-red-500",
    psychic: "bg-rose-400",
    rock: "bg-orange-200",
    ghost: "bg-indigo-400",
    ice: "bg-sky-300",
    dragon: "bg-blue-500",
  };
  const getBackgroundColor = (types) => {
    return types.length > 0
      ? typeColors[types[0].type.name] || "bg-gray-200"
      : "bg-gray-200";
  };
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-gray-950 mt-5 text-center">
        Pokédex
      </h1>
      {
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pokemons.map((pokemon, key) => (
            <li
              key={key}
              className={`p-4 rounded text-gray-950 min-w-48 border-solid border-2 border-slate-950 hover:border-dashed ${getBackgroundColor(
                pokemon.data.types
              )}`}
            >
              <img
                src={pokemon.data.sprites.front_default}
                alt={pokemon.data.name}
                className="mx-auto mb-2 min-h-52"
              ></img>
              <p className="text-lg font-bold">{pokemon.data.name}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Pokedex;
