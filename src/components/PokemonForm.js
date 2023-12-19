import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [nameInput, setNameInput] = useState("")
  const [hpInput, setHpInput] = useState("")
  const [frontImageInput, setFrontImageInput] = useState("")
  const [backImageInput, setBackImageInput] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    const newPokemonObj = {
      name:nameInput,
      hp:hpInput,
      sprites:{
        front:frontImageInput,
        back:backImageInput
      }
    }
    console.log(newPokemonObj)

    fetch("http://localhost:8001/pokemon", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(newPokemonObj)
    })
    .then(res => res.json())
    .then(resData => {
      onAddPokemon(resData)
    })
    
    setNameInput("")
    setHpInput("")
    setBackImageInput("")
    setFrontImageInput("")
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={hpInput} onChange={(e) => setHpInput(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImageInput} 
            onChange={(e) => setFrontImageInput(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImageInput} 
            onChange={(e) => setBackImageInput(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
