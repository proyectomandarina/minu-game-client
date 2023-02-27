import styled from "styled-components";
import assetsPath from "../../data/assets-path";

export const FooterContainer = styled.div`
    background-image: url(${assetsPath.footer});
    background-size: cover;
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    height: 15%;
    padding: 1em 2em;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
`

export const FooterSvg = styled.object`
    height: 100%;
`