import styled from "styled-components";
import theme from "../../data/theme";

const Button = styled.button`
  background-color: ${theme.ButtonBgColor};
  border-radius: ${theme.borderRadius};
  color: ${theme.white};
  padding: 0.5em 1em;
  font-size: 1.5em;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
  transition: color 0.3s ease-in-out;
  &:hover {
    background-color: ${theme.white};
    color: ${theme.ButtonBgColor};
  }
`;

export default Button;
