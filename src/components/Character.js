import React from "react"
import styled from "styled-components"

const StyledCharacter = styled.div`

h2 {
    font-size: 36px;
    text-shadow: 2px 2px 5px #FFE81F;
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