import styled from "styled-components";
import assetsPath from "../data/assets-path";
import Footer from "../components/Footer";
import theme from "../data/theme";
import TopBar from "../components/TopBar";
import LanguageSelector from "../components/LanguageSelector";
import BackArrow from "../components/BackArrow";
import { STEPS } from "../types";
import Alert from "../components/Alert";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;
const ImgContainer = styled.div`
  width: 80%;
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
  scroll-behavior: auto; 

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
  return (
    <Container id="manual-container">
      <TopBar>
        <BackArrow page={STEPS.HOME} color={theme.white}/>
        <LanguageSelector />
      </TopBar>
      <ImgContainer>
        <img src={assetsPath.dontDistract} />
      </ImgContainer>
      <RulesContainer>
        <RulesTitle>Reglas del juego</RulesTitle>
        <RulesDescription>
          El objetivo de este juego es darnos cuenta del tiempo que nos quita
          cada distracción. Para eso, primero vas a jugar prestando atención.
          Tenés que tocar los botones que se vayan iluminando lo más rápido que
          puedas. Cada uno representa una situación que podrías encontrarte al
          transitar. Un contador va a registrar el tiempo que te lleva completar
          la secuencia. Después vas a volver a jugar, pero ahora vas a estar
          siendo distraído. Lo ideal es que juegues con un celular aparte del
          dispositivo en el que corre el juego. Otra persona te va a dar
          consignas distractivas que tenés que cumplir:
        </RulesDescription>
        <Alert>Distracciones</Alert>
        <RulesList>
          <RulesItem>Escribi un Whatsapp que diga 'yendo'.</RulesItem>
          <RulesItem>
            Envia un audio de Whatsapp contando que queres cenar hoy.
          </RulesItem>
          <RulesItem>
            Busca la direccion de tu casa en Google Maps o Waze y dale iniciar
            al viaje.
          </RulesItem>
          <RulesItem>
            Elegi una cancion en Spotify o aplicaciones de reproduccion de
            musica y darle play.
          </RulesItem>
        </RulesList>
        <RulesDescription>
          Estos son solo ejemplos de las muchas cosas con las que alguien podria
          ditraerse al manejar. Durante la segunda ronda, quien te distraiga
          debe decirte dos consignas para que cumplas mientras jugas.
        </RulesDescription>
      </RulesContainer>
      <Footer />
    </Container>
  );
}
