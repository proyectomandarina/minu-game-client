import styled from "styled-components";
import BackArrow from "../components/BackArrow";
import ContactTop from "../components/ContactTop";
import TopBar from "../components/TopBar";
import assetsPath from "../data/assets-path";
import theme from "../data/theme";
import { STEPS } from "../types";
import { useContext } from "react";
import { GameContext } from "../context";
import language from "../data/language";
import { FooterLinks, FooterSvg } from "../components/Footer/components";

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
  text-align: center;
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
`;

export default function Contact() {
  const { ctx, setCtx } = useContext(GameContext);

  return (
    <ContactContainer>
      <ContactTop>
        <TopBar position="flex-start">
          <BackArrow page={STEPS.HOME} color={theme.black} />
        </TopBar>
        <ContactTitle>
          {language[ctx.currentLanguage].contactTitle}
        </ContactTitle>
        <IconsContainer>
          <FooterLinks href="https://www.minu.org/index.html" target="_blank">
            <FooterSvg src={assetsPath.logoMinuLegend} />
          </FooterLinks>
          <FooterLinks href="https://www.minu.org/PE-vial.html" target="_blank">
            <FooterSvg src={assetsPath.logoVialEducation} />
          </FooterLinks>
        </IconsContainer>
      </ContactTop>
      <FormIframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrAKZLdUZ6pSLfdL0MMg-X8AuUwXcthsxZ8iGYJs_fmqAEhg/viewform?embedded=true">
        Cargando…
      </FormIframe>
    </ContactContainer>
  );
}
