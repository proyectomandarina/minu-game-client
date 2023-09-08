import { useContext } from "react";
import { CounterClock, CounterContainer, CounterTitle } from "./components";
import { CounterProps } from "./types";
import { GameContext } from "../../context";
import language from "../../data/language";

export default function Counter({round, time}:CounterProps) {

  const { ctx, setCtx } = useContext(GameContext);

  return (
    <CounterContainer>
        <CounterTitle>{language[ctx.currentLanguage].counterTitle} {round}</CounterTitle>
        <CounterClock>{time}</CounterClock>
    </CounterContainer>
  )
}
