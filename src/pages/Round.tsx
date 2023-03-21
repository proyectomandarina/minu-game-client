import { useState } from "react";
import styled from "styled-components";
import Counter from "../components/Counter";
import GameButtons from "../components/GameButtons";
import theme from "../data/theme";

const RoundContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .roundTitle {
    color: ${theme.white};
    font-weight: bold;
    font-size: 1.5em;
    justify-content: flex-start;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Round({ roundNumber }: { roundNumber: number }) {
  return (
    <RoundContainer>
      <CounterContainer>
        <h2 className="roundTitle">Ronda {roundNumber}</h2>
        <Counter roundNumber={roundNumber} time={2000} />
      </CounterContainer>
      <GameButtons/>
    </RoundContainer>
  );
}

export default Round;
