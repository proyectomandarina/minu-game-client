import { Ctx } from "../types";
import styled from "styled-components";
import EndMessage from "../components/EndMessage";
import Button from "../components/Button";
import Popup from "../components/Popup";
import { useContext } from "react";
import { GameContext } from "../context";
import { setStep } from "../context";
import { STEPS } from "../types";
import theme from "../data/theme";
import Quit from "../components/Quit";
import { formatMilliseconds, MESSAGES } from "../constants";

const MIN_TIME_DIF_ALLOWED = 2000;

const EndGameContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .roundTitle {
    color: ${theme.white};
    font-weight: bold;
    font-size: 1.5em;
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 0 1em;
`;

const TimeWatchingThePhone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const validateTime = (ctx: Ctx): boolean =>
  ctx.secondTime - ctx.firstTime > MIN_TIME_DIF_ALLOWED;
const getFormatTime = (ctx: Ctx): number => {
  return validateTime(ctx) ? ctx.secondTime - ctx.firstTime : 0;
};



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
          <p>{formatMilliseconds(getFormatTime(ctx))}</p>
        </TimeWatchingThePhone>
      </Popup>
      <ButtonsContainer>
        <Button onClick={() => setCtx(setStep(STEPS.HOME, ctx))}>
          Volver a jugar
        </Button>
        <Button onClick={() => setCtx(setStep(STEPS.CONTACT, ctx))}>
          Contacto
        </Button>
      </ButtonsContainer>
    </EndGameContainer>
  );
}

export default EndGame;
