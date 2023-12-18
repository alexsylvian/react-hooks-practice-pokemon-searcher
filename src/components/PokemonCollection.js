import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList }) {

  const displayedList = pokemonList.map(pokemon => (
    <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} frontSprites={pokemon.sprites.front} backSprites={pokemon.sprites.back} />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {displayedList}
    </Card.Group>
  );
}

export default PokemonCollection;
