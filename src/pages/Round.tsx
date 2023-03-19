import { useState } from "react";
import styled from "styled-components";
import Counter from "../components/Counter";
import FinishedRound from "../components/FinishedRound";
import GameButtons from "../components/GameButtons";
import QuitGame from "../components/QuitGame";
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

function Round({ roundNumber }: { roundNumber: number }) {
  const [touches, setTouches] = useState(0);

  return (
    <RoundContainer>
      <div>
        <h2 className="roundTitle">Ronda {roundNumber}</h2>
        <Counter roundNumber={roundNumber} time={2000} />
      </div>
      <GameButtons oneMoreTouch={() => setTouches(touches + 1)} />
    </RoundContainer>
  );
}

export default Round;
