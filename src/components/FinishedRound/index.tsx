import StartButton from "../StartButton";
import { FinishAlert, FinishedRoundContainer, FinishedRoundTitle } from "./components";
import { STEPS } from "../../types";
import Quit from '../Quit/index'
import Counter from "../Counter";

export default function FinishedRound() {
    return (
        <FinishedRoundContainer id='middle-container'>
            <Quit/>
            <FinishedRoundTitle>Ronda finalizada</FinishedRoundTitle>
            <Counter round={1} time={2000}/>
            <StartButton step={STEPS.STEP_2}>COMENZAR SEGUNDA RONDA</StartButton>
            <FinishAlert>
                <h2>SE VIENEN LAS DISTRACCIONES</h2>
                <p>
                    Ahora hay que estar atento a las consignas que te va a 
                    decir tu capacitador y no perder la atencion a las luces 
                    que se van a encender
                </p>
            </FinishAlert>
        </FinishedRoundContainer>
    )
}
