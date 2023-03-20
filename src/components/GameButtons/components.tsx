import styled from "styled-components";
import { GameButtonProps } from "./types";

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 50%;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 33% 33% 33%;
  }
`;

export const Button = styled.img<GameButtonProps>`
  border-radius: 9999px;
  width: 100%;
  height: 100%;
  border: ${(props)=>props.wrong ? '5px solid red': ''};
  border: ${(props)=>props.active ? '5px solid rgb(0,255,0)': ''};
`;
