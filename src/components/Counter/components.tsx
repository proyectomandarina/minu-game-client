import styled from "styled-components";
import theme from "../../data/theme";

export const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const CounterTitle = styled.h3`
    color: ${theme.white};
    font-size: 2em;
`
export const CounterClock = styled.p`
    border: 1px solid ${theme.white};
    background-color: ${theme.ButtonBgColor};
    border-radius: ${theme.borderRadius};
    color: ${theme.white};
    font-size: 2em;
    padding: 0.4em 0.3em;
`