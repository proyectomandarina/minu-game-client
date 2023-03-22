import assetsPath from "../../data/assets-path"
import { FooterContainer, FooterSvg } from "./components"

export default function Footer() {
  return (
    <FooterContainer>
        <FooterSvg data={assetsPath.logoMinuLegend}/>
        <FooterSvg data={assetsPath.logoVialEducation}/>
    </FooterContainer>
  )
}
