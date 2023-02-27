import assetsPath from "../../data/assets-path";
import { ButtonsContainer, Button } from "./components";

export default function GameButtons() {
  return (
    <ButtonsContainer>
        {
            assetsPath.gameButtons.map((button, i) => {
                return (
                    <Button key={i}>{button}</Button> // Aca van los botones en forma de <object>
                )
            })
        }
    </ButtonsContainer>
  )
}
