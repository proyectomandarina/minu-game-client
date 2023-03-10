import styled from "styled-components";
import Alert from "../components/Alert";
import LanguageSelector from "../components/LanguageSelector";
import StartButton from "../components/StartButton";
import Button from "../components/Button";
import assetsPath from "../data/assets-path";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  img{
    width: 80%;
    margin: auto;
  }
`
const HomeButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

`

function Home() {
  return (
    <HomeContainer>
      <LanguageSelector />
      <img src={assetsPath.dontDistract}/>
      <Alert>¡CUANDO MANEJAMOS TODA NUESTRA ATENCION DEBE ESTAR EN LA CALLE</Alert>
      <StartButton>COMENZAR</StartButton>
      <HomeButtons>
        <Button>Instrucciones</Button>
        <Button>Contacto</Button>
      </HomeButtons>
      <Footer/>
    </HomeContainer>
  )
}

export default Home
