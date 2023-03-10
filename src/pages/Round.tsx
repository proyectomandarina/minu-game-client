import styled from "styled-components"
import Counter from "../components/Counter"
import FinishedRound from "../components/FinishedRound"
import GameButtons from "../components/GameButtons"
import QuitGame from "../components/QuitGame"
import theme from "../data/theme"

const RoundContainer = styled.div`
    height: 100%;
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    padding:2em 0;
    .roundTitle{
        color:${theme.white};
        font-weight:bold;
        font-size: 1.5em;
        justify-content: flex-start;
    }
`

function Round({ roundNumber }: { roundNumber: number }) {
  return (
    <RoundContainer>
      {QuitGame}
      <h2 className='roundTitle'>Ronda {roundNumber}</h2>
      <Counter roundNumber={roundNumber} time={2000} />
      {
        // Aca iria un renderizado condicional, si se tocaron los botones 10 veces
        // O la ronda esta finalizada renderiza el boton que dice 'comenzar segunda ronda'
        // Sino los botones del juego
        // los componentes son: <GameButtons/> y <FinishedRound/>
        <FinishedRound/>
      }
    </RoundContainer>
  )
}

export default Round