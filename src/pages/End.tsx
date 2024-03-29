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
import { formatMillisecondsToSeconds } from "../constants";
import Instagram from "../components/Instagram";
import language from "../data/language";

const MIN_TIME_DIF_ALLOWED = 2000;

const EndGameContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 40px;

  .roundTitle {
    color: ${theme.white};
    font-weight: bold;
    font-size: 1.5em;
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-areas:
    "replay contact"
    "home home";
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
  if (validateTime(ctx)) {
    return ctx.secondTime - ctx.firstTime;
  } else {
    return Math.abs(ctx.secondTime - ctx.firstTime);
  }
};

function EndGame() {
  const { ctx, setCtx } = useContext(GameContext);

  return (
    <EndGameContainer id="end-container">
      <Quit />
      <h2 className="roundTitle">{language[ctx.currentLanguage].endTitle}</h2>
      <Popup>
        <EndMessage dif={getFormatTime(ctx)} />
        <TimeWatchingThePhone>
          <p>{language[ctx.currentLanguage].timeWatchingThePhone}</p>
          <p>{formatMillisecondsToSeconds(getFormatTime(ctx))}</p>
        </TimeWatchingThePhone>
      </Popup>
      {}
      <ButtonsContainer>
        {validateTime(ctx) ? (
          <Button
            style={{ gridArea: "replay" }}
            onClick={() => setCtx(setStep(STEPS.STEP_1, ctx))}
          >
            {language[ctx.currentLanguage].replayButton}
          </Button>
        ) : (
          <Button
            style={{ gridArea: "replay" }}
            onClick={() => setCtx(setStep(STEPS.MIDDLE, ctx))}
          >
            {language[ctx.currentLanguage].replaySndCounter}
          </Button>
        )}
        <Button
          style={{ gridArea: "contact" }}
          onClick={() => setCtx(setStep(STEPS.CONTACT, ctx))}
        >
          {language[ctx.currentLanguage].contactButton}
        </Button>
        <Button
          style={{ gridArea: "home" }}
          onClick={() => setCtx(setStep(STEPS.HOME, ctx))}
        >
          {language[ctx.currentLanguage].goHome}
        </Button>
      </ButtonsContainer>
      <Instagram />
    </EndGameContainer>
  );
}

export default EndGame;
