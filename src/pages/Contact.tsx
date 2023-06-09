import styled from "styled-components";
import BackArrow from "../components/BackArrow";
import ContactTop from "../components/ContactTop";
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
    width: 8em;
  }
`;

const FormIframe = styled.iframe`
  width: 75vw;
  height: 40vh;
  display: inline;
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
      <FormIframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfrAKZLdUZ6pSLfdL0MMg-X8AuUwXcthsxZ8iGYJs_fmqAEhg/viewform?embedded=true"
      >Cargando…</FormIframe>
    </ContactContainer>
  );
}
