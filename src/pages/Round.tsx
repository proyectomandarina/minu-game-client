import styled from "styled-components";
import Counter from "../components/Counter";
import GameButtons from "../components/GameButtons";
import Quit from "../components/Quit";
import theme from "../data/theme";
import { useEffect, useState } from "react";

const RoundContainer = styled.div`
  min-height: 100vh;
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

export const formatearTiempo = (segundos:number) => {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos < 10 ? '0' : ''}${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
};

function Round({ roundNumber }: { roundNumber: number }) {
  
  const [contador, setContador] = useState(0);
  const [contando, setContando] = useState(true);

  useEffect(() => {
    let intervalo:any;

    if (contando) {
      intervalo = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [contando]);

  return (
    <RoundContainer>
      <Quit/>
      <CounterContainer>
        <h2 className="roundTitle">Ronda {roundNumber}</h2>
        <Counter round={roundNumber} time={formatearTiempo(contador)} />
      </CounterContainer>
      <GameButtons/>
    </RoundContainer>
  );
}

export default Round;
