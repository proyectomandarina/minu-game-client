import styled from "styled-components";
import theme from "../../data/theme";

export const StartButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    &:hover {
        img {
            transform: scale(1.15);
        }
        p{
            font-size: 1.75em;
        }
    }
`

export const StartButtonSvg = styled.img`
    transition: transform 0.2s ease-out;
    width: 10em;
`

export const StartLegend = styled.p`
    transition: font-size 0.2s ease-out;
    color: ${theme.white};
    -webkit-text-stroke: 2px ${theme.borderTextColor};
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
`