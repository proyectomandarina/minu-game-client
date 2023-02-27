import styled from "styled-components";
import theme from "../../data/theme";

export const StartButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    gap: 10px;
`

export const StartButtonSvg = styled.object`
    width: 40%
`

export const StartLegend = styled.p`
    color: ${theme.white};
    -webkit-text-stroke: 2px ${theme.borderTextColor};
    font-size: 2em;
    font-weight: bold;
`