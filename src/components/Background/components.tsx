import styled from "styled-components";
import theme from "../../data/theme";

export const Container = styled.div`
`;

export const Root = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 10;
  overflow-y: scroll;
`;

export const BgSvgContainer = styled.div`
  background-color: ${theme.bgColor};
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  align-content: space-between;
`;

export const BgSvg = styled.object`
  width: 100%;
  object-fit: cover;
  opacity: 0.4;
  @media screen and (min-width: 1024px) {
    &:first-child,
    &:nth-child(3) {
      display: none;
    }
  }
`;
