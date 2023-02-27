import styled from "styled-components"
import Counter from "../components/Counter"
import QuitGame from "../components/QuitGame"
import theme from "../data/theme"

const RoundContainer = styled.div`
    position: relative;
    z-index: 10;
    h2{
        color:${theme.white};
        font-weight:bold;
        font-size: 1.5em;
    }
`

function Round({roundNumber}:{roundNumber:number}) {
  return (
    <RoundContainer>
        {QuitGame}
        <h2>Ronda {roundNumber}</h2>
        <Counter roundNumber={roundNumber}/>
    </RoundContainer>
  )
}

export default Round