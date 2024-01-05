import React, { useState, useEffect } from "react";
import { fetchPokemons } from "../../api";
import Skeleton from "@mui/material/Skeleton";

const Pokedex = ({ pokemons }) => {
  const typeColors = {
    normal: "bg-gray-400",
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
  const typeHandler = (types) => {
    if (types && types.length > 0) {
      if (types.length === 1) {
        return types[0].type.name;
      } else if (types.length === 2) {
        return types[0].type.name  + " / " + types[1].type.name;
      }
    }
    return "";
  };
  return (
    <div className="container mx-auto px-4">
      {
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {pokemons.length > 0
            ? pokemons.map((pokemon, key) => (
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
                  <div className="bg-gray-200 h-20 w-full px-4 py-2 rounded">
                    <p className="text-lg font-semibold font-sans text-center">
                      {pokemon.data.name}
                    </p>
                    <p className="text-lg  text-center font-serif">
                      {typeHandler(pokemon.data.types)}
                    </p>
                  </div>
                </li>
              ))
            : Array.from({ length: 8 }).map((_, index) => (
                <li key={index} className="p-4 rounded">
                  <Skeleton variant="rectangular" width={340} height={250}/>
                    <div className="bg-gray-200 h-20 w-full px-4 py-2 flex flex-col justify-center items-center align-center ">
                      <Skeleton width="60%" height={30} />
                      <Skeleton width="40%" height={30} />
                    </div>

                </li>
              ))}
        </ul>
      }
    </div>
  );
};

export default Pokedex;
