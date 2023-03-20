import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Ctx, STEPS } from "./types";
import { GameContext } from "./context";
import { INITIAL_CTX } from "./constants";
import Round from "./pages/Round";
import Background from "./components/Background";
import FinishedRound from "./components/FinishedRound";
import EndGame from "./pages/EndGame";

function App() {
  const [ctx, setCtx] = useState<Ctx>(INITIAL_CTX);

  useEffect(()=>{
    console.log({ctx});
  },[ctx])

  const renderCurrentStep = () => {
    switch (ctx.step) {
      case STEPS.HOME:
        return <Home />;
      case STEPS.STEP_1:
        return <Round roundNumber={1} />;
      case STEPS.STEP_2:
        return <Round roundNumber={2} />;
      case STEPS.MIDDLE:
        return <FinishedRound/>;
      case STEPS.END:
        return <EndGame/>;
      default:
        return <p>No step</p>;
    }
  };

  return (
    <GameContext.Provider value={{ ctx, setCtx }}>
      <Background>{renderCurrentStep()}</Background>
    </GameContext.Provider>
  );
}

export default App;
