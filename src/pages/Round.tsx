import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Counter from "../components/Counter"
import FinishedRound from "../components/FinishedRound"
import GameButtons from "../components/GameButtons"
import QuitGame from "../components/QuitGame"
import theme from "../data/theme"

const RoundContainer = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    min-height: 100vh;
    gap:3em;
    padding: 1em 2em;
    .roundTitle{
        color:${theme.white};
        font-weight:bold;
        font-size: 1.5em;
        justify-content: flex-start;
    }
`

function Round({ roundNumber }: { roundNumber: number }) {

  const [touches, setTouches] = useState(0)
  const navigate = useNavigate();

  useEffect(()=>{
    if (touches>=10 && roundNumber===2) navigate('/end')
  }, [touches])

  return (
    <RoundContainer>
      <QuitGame/>
      <h2 className='roundTitle'>Ronda {roundNumber}</h2>
      <Counter roundNumber={roundNumber} time={2000} />
      {
        touches >= 10 
        ? roundNumber === 1 ? <FinishedRound/> : null
        : <GameButtons oneMoreTouch={()=>setTouches(touches+1)}/>
      }
    </RoundContainer>
  )
}

export default Round