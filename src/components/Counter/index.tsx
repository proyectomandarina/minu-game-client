import { CounterClock, CounterContainer, CounterTitle } from "./components";
import { CounterProps } from "./types";

export default function Counter({round, time}:CounterProps) {
  return (
    <CounterContainer>
        <CounterTitle>Contador {round}</CounterTitle>
        <CounterClock>{time}</CounterClock>
    </CounterContainer>
  )
}
