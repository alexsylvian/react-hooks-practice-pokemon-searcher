import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/pokemon")
    .then(res => res.json())
    .then(resData => setPokemonList(resData))
  }, [])

  function handleAddPokemon(newPokemon){
    setPokemonList(prevPokemonList => [...prevPokemonList, newPokemon]);
  }

  const searchedPokemonList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search setSearchInput={setSearchInput} />
      <br />
      <PokemonCollection pokemonList={searchedPokemonList}/>
    </Container>
  );
}

export default PokemonPage;
