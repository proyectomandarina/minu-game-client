import styled from "styled-components";
import Alert from "../components/Alert";
import LanguageSelector from "../components/LanguageSelector";

const HomeContainer = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
`

export default function Home() {
  return (
    <HomeContainer>
      <LanguageSelector />
      <Alert>¡CUANDO MANEJAMOS TODA NUESTRA ATENCION DEBE ESTAR EN LA CALLE</Alert>
    </HomeContainer>
  )
}
