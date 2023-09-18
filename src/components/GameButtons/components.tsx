import styled from "styled-components";
import { GameButtonProps } from "./types";
import theme from "../../data/theme";

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
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-shadow: ${(props) =>
    props.active ? `0px 0px 25px 20px ${theme.ButtonBgColor}` : null};
  box-shadow: ${(props) => (props.wrong ? `0px 0px 25px 20px #c42f2f` : null)};
  transition: box-shadow 0.15s ease-in-out;
  display: inline-block;
  border-radius: 99999px;
`;
