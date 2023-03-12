import styled from "styled-components";
import theme from "../../data/theme";

export const GameContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${theme.bgColor};
`

export const BgSvgContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    display: grid;
    align-content: space-between;
`

export const BgSvg = styled.object`
    width: 100%;
    height: 100%;
    object-fit: cover;
`