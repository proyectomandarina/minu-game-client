import assetsPath from "../../data/assets-path";
import { BgSvg, BgSvgContainer, Container, Root } from "./components";
import { BgProps } from "./types";

function Background({ children }: BgProps) {
  return (
    <Container>
      <BgSvgContainer id="background">
        <BgSvg data={assetsPath.bgCubes} />
        <BgSvg data={assetsPath.bgLines} />
        <BgSvg data={assetsPath.bgCubes} className="turned" />
      </BgSvgContainer>
      <Root id="root">{children}</Root>
    </Container>
  );
}

export default Background;
