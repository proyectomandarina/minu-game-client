import styled from "styled-components";
import theme from "../../data/theme";

export const GameContainer = styled.div`
    height: 100vh;
  position: relative;
  background-color: ${theme.bgColor};
`;

export const GameRoot = styled.div`
  position: relative;
  z-index: 20;
  height: 100%;
`

export const BgSvgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  align-content: space-between;
`;

export const BgSvg = styled.object`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (min-width: 1024px) {
    &:first-child, &:nth-child(3){
      display:none;
    }
  }
`;
