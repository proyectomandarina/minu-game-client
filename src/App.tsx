import { useState } from "react";
import Home from "./pages/Home";
import { Ctx, STEPS } from "./types";
import { GameContext } from "./context";
import { INITIAL_CTX } from "./constants";
import Round from "./pages/Round";
import Background from "./components/Background";
import Middle from "./pages/Middle";
import End from "./pages/End";
import Manual from "./pages/Manual";
import Contact from "./pages/Contact";

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
      case STEPS.MIDDLE:
        return <Middle/>;
      case STEPS.END:
        return <End/>;
      case STEPS.INSTRUCTIONS:
        return <Manual/>;
      case STEPS.CONTACT:
        return <Contact/>
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
