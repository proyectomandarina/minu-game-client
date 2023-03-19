import styled from "styled-components";

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

export const Button = styled.img`
  border-radius: 9999px;
  width: 100%;
  height: 100%;
`;
