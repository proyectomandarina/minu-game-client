import assetsPath from "../../data/assets-path";
import { ButtonsContainer, Button } from "./components";

export default function GameButtons({oneMoreTouch}:{oneMoreTouch:()=>void}) {
  return (
    <ButtonsContainer>
        {
            assetsPath.gameButtons.map((button, i) => {
                return (
                    <Button key={i} src={button} onClick={oneMoreTouch}/> 
                )
            })
        }
    </ButtonsContainer>
  )
}
