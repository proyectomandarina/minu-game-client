import assetsPath from "../../data/assets-path";
import { BgSvg, BgSvgContainer, GameContainer, GameRoot } from "./components";
import { GameProps } from "./types";

function Game({ children }: GameProps) {
  return (
    <GameContainer>
      <BgSvgContainer>
        <BgSvg data={assetsPath.bgCubes} />
        <BgSvg data={assetsPath.bgLines} />
        <BgSvg data={assetsPath.bgCubes} className="turned" />
      </BgSvgContainer>
      <GameRoot>{children}</GameRoot>
    </GameContainer>
  );
}

export default Game;
