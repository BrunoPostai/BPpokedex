"use client"
import React from 'react';
import Pokedex from './component/pokemonCard/index';
import SearchAppBar from './component/navbar/index';

function App() {
  return (
    <div className="App p-8">
      <SearchAppBar />
      <Pokedex />
    </div>
  );
}

export default App;
