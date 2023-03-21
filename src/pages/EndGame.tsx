import styled from "styled-components"
import Alert from "../components/Alert"
import Button from "../components/Button"
import Popup from "../components/Popup"
import { useContext } from "react"
import { GameContext } from "../context"
import { setStep } from "../context"
import { STEPS } from "../types"
import theme from "../data/theme"
import Quit from "../components/Quit"

const EndGameContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    .roundTitle{
        color:${theme.white};
        font-weight:bold;
        font-size: 1.5em;
    }
`

const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 0 1em;
`

const TimeWatchingThePhone = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function EndGame() {
    const { ctx, setCtx } = useContext(GameContext);

    return (
        <EndGameContainer>
            <Quit/>
            <h2 className="roundTitle">Fin del juego</h2>
            <Popup>
                <h3>¿Cumpliste de verdad las consignas distractivas?</h3>
                <p>Recordá que este juego no es para ganar, sino para darnos cuenta del peligro de distraerse en la calle.</p>
                <Alert>VUELVE A INTENTARLO DE NUEVO</Alert>
                <TimeWatchingThePhone>
                    <p>Tiempo viendo el telefono:</p>
                    <p>00:00</p>
                </TimeWatchingThePhone>
            </Popup>
            <ButtonsContainer>
                <Button onClick={() => setCtx(setStep(STEPS.HOME, ctx))}>Volver a jugar</Button>
                <Button onClick={() => setCtx(setStep(STEPS.CONTACT, ctx))}>Contacto</Button>
            </ButtonsContainer>
        </EndGameContainer>
    )
}

export default EndGame
