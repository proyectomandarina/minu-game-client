import styled from "styled-components"
import QuitGame from "../components/QuitGame"
import theme from "../data/theme"

const EndGameContainer = styled.div`
    height: 100%;
    position: relative;
    z-index: 10;
    .roundTitle{
        color:${theme.white};
        font-weight:bold;
        font-size: 1.5em;
    }
`

function EndGame() {
    return (
        <EndGameContainer>
            {QuitGame}
            <h2 className="roundTitle">Fin del juego</h2>
        </EndGameContainer>
    )
}

export default EndGame
