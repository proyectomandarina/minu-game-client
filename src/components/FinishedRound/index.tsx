import StartButton from "../StartButton";
import { FinishAlert, FinishedRoundContainer, FinishedRoundTitle } from "./components";
import { STEPS } from "../../types";
import Quit from '../Quit/index'
import Counter from "../Counter";
import { formatearTiempo } from "../../pages/Round";
import { useContext } from "react";
import { GameContext } from "../../context";
import language from "../../data/language";

export default function FinishedRound() {

    const {ctx} = useContext(GameContext)

    return (
        <FinishedRoundContainer id='middle-container'>
            <Quit/>
            <FinishedRoundTitle>{language[ctx.currentLanguage].middleTitle}</FinishedRoundTitle>
            <Counter round={1} time={formatearTiempo(Math.floor(ctx.firstTime/1000))}/>
            <StartButton step={STEPS.STEP_2}>{language[ctx.currentLanguage].middleSubtitle}</StartButton>
            <FinishAlert>
                <h2>{language[ctx.currentLanguage].middleAlertTitle}</h2>
                <p>
                    {language[ctx.currentLanguage].middleAlertDescription}
                </p>
            </FinishAlert>
        </FinishedRoundContainer>
    )
}
