import styled from "styled-components";
import Alert from "../components/Alert";
import LanguageSelector from "../components/LanguageSelector";
import StartButton from "../components/StartButton";
import Button from "../components/Button";
import assetsPath from "../data/assets-path";
import Footer from "../components/Footer";

import { STEPS } from "../types";
import { GameContext, setStep } from "../context";
import { useContext, useEffect } from "react";
import { INITIAL_CTX } from "../constants";
import TopBar from "../components/TopBar";
import Instagram from "../components/Instagram";
import language from "../data/language";

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding-top: 40px;
  img {
    width: 80%;
  }
`;

const HomeButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const MarginedHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

function Home() {
  const { ctx, setCtx } = useContext(GameContext);
  
  return (
    <HomeContainer id="home-container">
      <TopBar position="flex-end">
        <LanguageSelector/> 
      </TopBar>
      <MarginedHome>
        <img src={assetsPath.dontDistract} />
        <Alert>
        </Alert>
        <StartButton step={STEPS.STEP_1}>COMENZAR</StartButton>
        <HomeButtons>
          <Button onClick={() => setCtx(setStep(STEPS.INSTRUCTIONS, ctx))}>
            Instrucciones
          </Button>
          <Button onClick={() => setCtx(setStep(STEPS.CONTACT, ctx))}>
            Contacto
          </Button>
        </HomeButtons>
      </MarginedHome>
      <Footer />
      <Instagram/>
    </HomeContainer>
  );
}

export default Home;
