import assetsPath from "../../data/assets-path"
import { Container, Img, Text } from "./components"

export default function Instagram() {
  return (
    <Container href="https://www.instagram.com/asociacionminu/" target="_blank">
        <Img src={assetsPath.instagram}></Img>
        <Text>@asociacionminu</Text>
    </Container>
  )
}
