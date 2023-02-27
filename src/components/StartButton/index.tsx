import assetsPath from "../../data/assets-path"
import { StartButtonContainer, StartButtonSvg, StartLegend } from "./components"

export default function StartButton() {
  return (
    <StartButtonContainer>
        <StartButtonSvg data={assetsPath.startButton}/>
        <StartLegend>COMENZAR</StartLegend>
    </StartButtonContainer>
  )
}
