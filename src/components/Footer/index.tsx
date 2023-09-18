import assetsPath from "../../data/assets-path";
import { FooterContainer, FooterLinks, FooterSvg } from "./components";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterLinks href="https://www.minu.org/index.html" target="_blank">
        <FooterSvg src={assetsPath.logoMinuLegend} />
      </FooterLinks>
      <FooterLinks href="https://www.minu.org/PE-vial.html" target="_blank">
        <FooterSvg src={assetsPath.logoVialEducation} />
      </FooterLinks>
    </FooterContainer>
  );
}
