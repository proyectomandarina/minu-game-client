import assetsPath from "../../data/assets-path";
import {
  StartButtonContainer,
  StartButtonSvg,
  StartLegend,
} from "./components";
import { StartButtonProps } from "./types";
import { useContext } from "react";
import { GameContext } from "../../context";
import { setStep } from "../../context";

export default function StartButton({ children, step }: StartButtonProps) {
  const { ctx, setCtx } = useContext(GameContext);
  return (
    <StartButtonContainer onClick={() => setCtx(setStep(step, ctx))}>
      <StartButtonSvg data={assetsPath.startButton} />
      <StartLegend>{children}</StartLegend>
    </StartButtonContainer>
  );
}
