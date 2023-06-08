import styled from "styled-components";
import BackArrow from "../components/BackArrow";
import Button from "../components/Button";
import ContactTop from "../components/ContactTop";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import TopBar from "../components/TopBar";
import assetsPath from "../data/assets-path";
import theme from "../data/theme";
import { STEPS } from "../types";

const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  margin-bottom: 68px;
`;

const ContactTitle = styled.h3`
  font-size: 2em;
`;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  object {
    width: 10em;
  }
`;

const InputInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export default function Contact() {
  return (
    <ContactContainer>
      <ContactTop>
        <TopBar position="flex-start">
          <BackArrow page={STEPS.HOME} color={theme.black} />
        </TopBar>
        <ContactTitle>Dejanos tu opinion</ContactTitle>
        <IconsContainer>
          <object data={assetsPath.logoMinuLegend}></object>
          <object data={assetsPath.logoVialEducation}></object>
        </IconsContainer>
      </ContactTop>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdxrwDYhywWGmUNmJsHot6Ctv88MlEEaK8-5rcHxg_e3g0IUA/viewform?embedded=true"
        width="1000"
        height="1000"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
      >Cargando…</iframe>
    </ContactContainer>
  );
}
