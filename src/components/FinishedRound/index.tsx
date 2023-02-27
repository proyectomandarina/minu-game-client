import StartButton from "../StartButton";
import { FinishAlert, FinishedRoundContainer } from "./components";

export default function FinishedRound() {
    return (
        <FinishedRoundContainer>
            <StartButton>COMENZAR SEGUNDA RONDA</StartButton>
            <FinishAlert>
                <h2>SE VIENEN LAS DISTRACCIONES</h2>
                <p>
                    Ahora hay que estar atento a las peticiones que te va a 
                    decir tu capacitador y no perder la atencion a las luces 
                    que se van a encender
                </p>
            </FinishAlert>
        </FinishedRoundContainer>
    )
}
