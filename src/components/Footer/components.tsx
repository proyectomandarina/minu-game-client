import styled from "styled-components";
import assetsPath from "../../data/assets-path";

export const FooterContainer = styled.div`
  background-image: url(${assetsPath.footer});
  background-size: cover;
  width: 100%;
  padding: 1.5em 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FooterLinks = styled.a`
  width: 10em;
`;

export const FooterSvg = styled.img`
  width: 100%;
`;
