import styled from "styled-components";
import assetsPath from "../../data/assets-path";

export const FooterContainer = styled.div`
    background-image: url(${assetsPath.footer});
    background-size: cover;
    background-position: 0% 0%;
    width:100%;
    padding: 1em 2em;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
`

export const FooterSvg = styled.object`
    height: 8em;
`