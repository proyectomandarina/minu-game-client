import assetsPath from "../../data/assets-path";
import { ButtonsContainer, Button } from "./components";

export default function GameButtons() {
  return (
    <ButtonsContainer>
        {
            assetsPath.gameButtons.map((button, i) => {
                return (
                    <Button key={i} src={button}/> 
                )
            })
        }
    </ButtonsContainer>
  )
}
