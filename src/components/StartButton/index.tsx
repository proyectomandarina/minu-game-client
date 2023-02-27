import assetsPath from "../../data/assets-path"
import { StartButtonContainer, StartButtonSvg, StartLegend } from "./components"
import { StartButtonProps } from "./types"

export default function StartButton({children}:StartButtonProps) {
  return (
    <StartButtonContainer>
        <StartButtonSvg data={assetsPath.startButton}/>
        <StartLegend>{children}</StartLegend>
    </StartButtonContainer>
  )
}
