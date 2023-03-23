import styled from "styled-components";
import assetsPath from "../../data/assets-path";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${assetsPath.footer});
    transform: rotate(180deg);
    background-size: cover;
    background-position: 0 0;
    z-index: -1;
  }
`;
