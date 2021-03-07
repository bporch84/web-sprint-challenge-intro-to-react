import React, { useState, useEffect } from 'react';
import axios from "axios"
import Characters from "./components/Characters"
import styled from "styled-components"

const StyledApp = styled.div`
text-align: center;

h1 {
  color: #FFE81F;
  font-size: 72px;
  font-family: monospace;
  opacity: 0.3;
}
`

const App = () => {
  const [charData, setCharData] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
         .then(res => res.data)
         .then(res => {
           setCharData(res)
         })
  }, [])

  return (
    <StyledApp>
      <h1 className="Header">Characters</h1>
      <Characters characters={charData} />
    </StyledApp>
  );
}

export default App;
