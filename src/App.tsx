import { useState } from "react";
import Home from "./pages/Home";
import { Ctx, STEPS } from "./types";
import { GameContext } from "./context";
import { INITIAL_CTX } from "./constants";
import Round from "./pages/Round";
import Background from "./components/Background";

function App() {
  const [ctx, setCtx] = useState<Ctx>(INITIAL_CTX);

  const renderCurrentStep = () => {
    switch (ctx.step) {
      case STEPS.HOME:
        return <Home />;
      case STEPS.STEP_1:
        return <Round roundNumber={1} />;
      case STEPS.STEP_2:
        return <Round roundNumber={2} />;
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
