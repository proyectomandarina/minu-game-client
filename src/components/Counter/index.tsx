import { CounterClock, CounterContainer, CounterTitle } from "./components";
import { CounterProps } from "./types";

export default function Counter({roundNumber, time}:CounterProps) {
  return (
    <CounterContainer>
        <CounterTitle>Contador {roundNumber}</CounterTitle>
        <CounterClock>{time}</CounterClock>
    </CounterContainer>
  )
}
