import styled from "styled-components";
import assetsPath from "../../data/assets-path";

export const FooterContainer = styled.div`
    background-image: url(${assetsPath.footer});
    background-size:cover;
    padding: 0.5em 2em;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
`
// hp-setup
export const FooterSvg = styled.object`
    width: 7em;
`