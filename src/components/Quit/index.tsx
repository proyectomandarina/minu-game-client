import styled from "styled-components"
import assetsPath from "../../data/assets-path"
import { useContext } from "react"
import { GameContext } from "../../context"
import { STEPS } from "../../types"
import { setStep } from "../../context"

const QuitContainer = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
`

const Cross = styled.object`
    width: 1.5em;
`

export default function Quit() {
const { ctx, setCtx } = useContext(GameContext);
  return (
    <QuitContainer onClick={() => setCtx(setStep(STEPS.INSTRUCTIONS, ctx))}>
        <Cross data={assetsPath.cross}/>
    </QuitContainer>
  )
}
