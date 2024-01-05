import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchPokemons } from "../../api";

const Pokedex = ({ pokemons }) => {
 
  const typeColors = {
    normal: "bg-gray-100",
    flying: "bg-gray-500",
    fire: "bg-orange-400",
    water: "bg-blue-300",
    grass: "bg-green-400",
    bug: "bg-lime-400",
    poison: "bg-violet-400",
    electric: "bg-yellow-400",
    ground: "bg-amber-600",
    fairy: "bg-pink-200",
    dark: "bg-neutral-700",
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
      {
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-5">
          {pokemons.map((pokemon, key) => (
            <li
              key={key}
              className={`p-4 rounded text-gray-950 min-w-32 border-solid border-2 border-slate-950 hover:border-dashed ${getBackgroundColor(
                pokemon.data.types
              )}`}
            >
              <img
                src={pokemon.data.sprites.front_default}
                alt={pokemon.data.name}
                className="mx-auto mb-2 min-h-52"
              ></img>
              <p className="text-lg font-bold bg-stone-300" >{pokemon.data.name}</p>
              <p className="text-lg font-semibold bg-stone-300" >{pokemon.data.types[0].type.name}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default Pokedex;
