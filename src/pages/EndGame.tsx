import styled from "styled-components"
import Alert from "../components/Alert"
import Button from "../components/Button"
import Popup from "../components/Popup"
import QuitGame from "../components/QuitGame"
import theme from "../data/theme"

const EndGameContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
    z-index: 10;
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
    return (
        <EndGameContainer>
            <QuitGame/>
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
                <Button>Volver a jugar</Button>
                <Button>Contacto</Button>
            </ButtonsContainer>
        </EndGameContainer>
    )
}

export default EndGame
