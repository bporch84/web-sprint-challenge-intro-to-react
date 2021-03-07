import React from "react"
import Character from "./Character"
import styled from "styled-components"

const StyledCharacters = styled.div`
    display: flex;
    flex-direction:column;
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