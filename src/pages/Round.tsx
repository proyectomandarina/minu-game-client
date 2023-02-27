import styled from "styled-components"
import QuitGame from "../components/QuitGame"
import theme from "../data/theme"

const RoundContainer = styled.div`
    position: relative;
    z-index: 10;
    p{
        color:${theme.white};
        font-weight:bold;
    }
`

function Round({roundNumber}:{roundNumber:number}) {
  return (
    <RoundContainer>
        {QuitGame}
        <p>Ronda {roundNumber}</p>
    </RoundContainer>
  )
}

export default Round