import styled from "styled-components";
import theme from "../../data/theme";

export const Container = styled.a`
  padding: 10px 20px;
  background-color: ${theme.ButtonBgColor};
  border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img`
  width: 1em;
`;

export const Text = styled.p`
  color: ${theme.white};
  font-weight: bold;
  font-size: 1.2em;
`;
