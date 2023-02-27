import { CounterClock, CounterContainer, CounterTitle } from "./components";
import { CounterProps } from "./types";

export default function Counter({roundNumber}:CounterProps) {
  return (
    <CounterContainer>
        <CounterTitle>Contador {roundNumber}</CounterTitle>
        <CounterClock>00:00</CounterClock>
    </CounterContainer>
  )
}
