"use client"
import React, { useState, useEffect } from "react";
import NavBar from "./component/navbar";
import Pokedex from "./component/pokemonCard"; 
import { fetchPokemons } from "./api";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const response = await fetchPokemons();
      setPokemons(response);
    } catch (error) {
      console.error("Error in getPokemons:", error);
    }
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if(name ===  ""){
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)){
        filteredPokemons.push(pokemons[i]);
      }
    }
    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <NavBar onSearch={pokemonFilter} />
      <Pokedex pokemons={pokemons} />
    </div>
  );
};

export default App;
