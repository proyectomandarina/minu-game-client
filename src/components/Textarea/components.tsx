import styled from "styled-components";
import theme from "../../data/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 2em;
`;

export const Label = styled.label`
  color: ${theme.borderTextColor};
  font-weight: bold;
`;

export const MainInput = styled.textarea`
  font-size: 0.75em;
  background-color: ${theme.bgColor};
  color: ${theme.white};
  border: 2px solid ${theme.borderTextColor};
  padding: 10px 20px;
  resize: none;
  height: 4em;
`;
