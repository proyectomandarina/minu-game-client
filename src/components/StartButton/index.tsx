import { Link } from "react-router-dom"
import assetsPath from "../../data/assets-path"
import { StartButtonContainer, StartButtonSvg, StartLegend } from "./components"
import { StartButtonProps } from "./types"

export default function StartButton({ children, route }: StartButtonProps) {
  return (
    <Link to={route}>
      <StartButtonContainer>
        <StartButtonSvg data={assetsPath.startButton} />
        <StartLegend>{children}</StartLegend>
      </StartButtonContainer>
    </Link>
  )
}
