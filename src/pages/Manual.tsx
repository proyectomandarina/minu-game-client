import styled from "styled-components";
import assetsPath from "../data/assets-path";
import Footer from "../components/Footer";
import theme from "../data/theme";
import TopBar from "../components/TopBar";
import LanguageSelector from "../components/LanguageSelector";
import BackArrow from "../components/BackArrow";
import { STEPS } from "../types";
import Alert from "../components/Alert";
import { useContext } from "react";
import { GameContext } from "../context";
import language from "../data/language";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
const ImgContainer = styled.div`
  width: 70%;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;

const RulesContainer = styled.div`
  background-color: ${theme.bgColor};
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 40px;
  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.white};
  overflow-y: scroll;

  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

const RulesTitle = styled.h3`
  color: ${theme.white};
`;
const RulesDescription = styled.p`
  color: ${theme.white};
`;
const RulesList = styled.ul``;
const RulesItem = styled.li`
  color: ${theme.white};
`;

export default function Manual() {
  const { ctx, setCtx } = useContext(GameContext);

  return (
    <Container id="manual-container">
      <TopBar>
        <BackArrow page={STEPS.HOME} color={theme.white} />
        <LanguageSelector />
      </TopBar>
      <ImgContainer>
        <img src={assetsPath.dontDistract} />
      </ImgContainer>
      <RulesContainer>
        <RulesTitle>{language[ctx.currentLanguage].rulesTitle}</RulesTitle>
        <RulesDescription>
          {language[ctx.currentLanguage].rulesDescription.one}
        </RulesDescription>
        <Alert>{language[ctx.currentLanguage].rulesAlert}</Alert>
        <RulesList>
          {language[ctx.currentLanguage].rulesExamples.map((example, i) => {
            return <RulesItem key={i}>{example}</RulesItem>;
          })}
        </RulesList>
        <RulesDescription>
          {language[ctx.currentLanguage].rulesDescription.two}
        </RulesDescription>
      </RulesContainer>
      <Footer />
    </Container>
  );
}
