import React from "react"
import styled from "styled-components"

const StyledCharacter = styled.div`
width: 500px;
margin: 20px 0;
text-align: center;
border: 10px double #FFE81F;

h2 {
    font-size: 48px;
    text-shadow: 2px 2px 5px #FFE81F;
}

p {
    color: #FFE81F;
    text-shadow: 2px 2px black;
    font-size: 20px;
}
`

const Character = (props) => {
    const { character } = props;
    return (
        <StyledCharacter>
            <div>
                <h2>{character.name}</h2>
                <p>Gender: {character.gender === "n/a" ? "I'm a robot!" : character.gender === "male" ? "Male" : "Female"}</p>
                <p>Year of Birth: {character.birth_year}</p>
                <p>Skin Color: {character.skin_color}</p>
            </div>
        </StyledCharacter>
    )
}

export default Character