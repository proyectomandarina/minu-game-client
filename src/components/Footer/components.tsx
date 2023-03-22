import styled from "styled-components";
import assetsPath from "../../data/assets-path";

export const FooterContainer = styled.div`
    background-image: url(${assetsPath.footer});
    background-size:cover;
    width:100%;
    height: 100%;
    padding: 0em 2em;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
`
// hp-setup
export const FooterSvg = styled.object`
    height: 7em;
`