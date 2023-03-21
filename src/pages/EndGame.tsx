import { Ctx } from "../types";
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
import { formatMilliseconds, MESSAGES } from "../constants";

const MIN_TIME_DIF_ALLOWED = 2000;

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

const validateTime = (ctx: Ctx): boolean => (ctx.secondTime - ctx.firstTime) > MIN_TIME_DIF_ALLOWED;

const getFormatTime = (ctx: Ctx): number => {
  return validateTime(ctx) ?
    ctx.secondTime - ctx.firstTime :
    0
};

const EndMessage = ({ dif }: { dif: number }) => {
  const calcularDistancia = (tiempo: number) => {
    let velocidad = 0;
    let distancia = 0;

    if (tiempo >= 0 && tiempo <= 2) {
      // no hay información de velocidad para este rango
    } else if (tiempo >= 3 && tiempo <= 5) {
      velocidad = 36.1; // metros por segundo
    } else if (tiempo >= 6 && tiempo <= 8) {
      velocidad = 30.5; // metros por segundo
    } else if (tiempo >= 9 && tiempo <= 11) {
      velocidad = 22.2; // metros por segundo
    } else if (tiempo >= 12 && tiempo <= 15) {
      velocidad = 13.8; // metros por segundo
    } else if (tiempo >= 16 && tiempo <= 20) {
      velocidad = 8.3; // metros por segundo
    } else if (tiempo >= 21 && tiempo <= 30) {
      velocidad = 4.1; // metros por segundo
    } else {
      velocidad = 4.1; // metros por segundo (velocidad promedio del peatón)
    }

    distancia = Math.round(velocidad * tiempo); // redondeamos para no tener decimales

    return distancia;
  };

  return (
    <div>
      {
      MESSAGES.map((mensaje, index) => (
        <div key={index}>
          <h3>{mensaje.h3}</h3>
          <p>{mensaje.p}</p>
          <p>Tiempo: {formatMilliseconds(dif)}</p>
          {index > 0 && ( // si no es el primer mensaje, calculamos la distancia
            <p>
              Distancia recorrida: {calcularDistancia((dif/1000) - MESSAGES[index - 1].max)} metros
            </p>)}
        </div>
      ))
    }
    </div>
  )
  }


function EndGame() {
  const { ctx, setCtx } = useContext(GameContext);
  return (
    <EndGameContainer>
      <Quit />
      <h2 className="roundTitle">Fin del juego</h2>
      <Popup>
        <EndMessage dif={getFormatTime(ctx)} />
        <TimeWatchingThePhone>
          <p>Tiempo viendo el telefono:</p>
          <p>
            {
              formatMilliseconds(getFormatTime(ctx))
            }
          </p>
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
