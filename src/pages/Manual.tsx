import styled from "styled-components";
import assetsPath from "../data/assets-path";
import Footer from "../components/Footer";
import theme from "../data/theme";
import TopBar from "../components/TopBar";
import LanguageSelector from "../components/LanguageSelector";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
const ImgContainer = styled.div`
  width: 80%;
  img {
    width: 100%;
    height: 100%;
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
`;

const RulesTitle = styled.h3`
  color: ${theme.white};
`;
const RulesDescription = styled.p`
  color: ${theme.white};
`;

export default function Manual() {
  return (
    <Container>
      <TopBar>
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
      </RulesContainer>
      <Footer />
    </Container>
  );
}
