import React from "react"
import Character from "./Character"
import styled from "styled-components"

const StyledCharacters = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    text-align: center;
    width: 90%;
    margin: 0 auto;
`

const Characters = (props) => {
    return (
        <StyledCharacters>
            {props.characters.map(character => {
                return <Character character={character} />
            })}
        </StyledCharacters>
    )
}

export default Characters