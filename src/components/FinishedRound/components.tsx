import styled from "styled-components";
import Alert from "../Alert";
import theme from '../../data/theme'

export const FinishedRoundContainer = styled.div``   

export const FinishAlert = styled(Alert)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
    border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
    padding: 2em 1em;

    h2{
        font-size: 1.2em;
        font-weight: bold;
    }

`