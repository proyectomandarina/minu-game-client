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

const HomeContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
`;

function Home() {
  const { ctx, setCtx } = useContext(GameContext);

  useEffect(()=>{
    setCtx(INITIAL_CTX);
  });

  return (
    <HomeContainer>
      <TopBar>
        <LanguageSelector />
      </TopBar>
      <MarginedHome>
        <img src={assetsPath.dontDistract} />
        <Alert>
          ¡CUANDO MANEJAMOS TODA NUESTRA ATENCION DEBE ESTAR EN LA CALLE
        </Alert>
        <StartButton step={STEPS.STEP_1}>Comenzar</StartButton>
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
    </HomeContainer>
  );
}

export default Home;
