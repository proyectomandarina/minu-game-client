import assetsPath from "../../data/assets-path";
import styled from "styled-components";
import { STEPS } from "../../types";
import { setStep } from "../../context";
import { useContext } from "react";
import { GameContext } from "../../context";

export const Container = styled.div`
  padding: 1em;
`;
export const Icon = styled.img`
  width: 2em;
`;

export default function BackArrow({ page }: { page: STEPS }) {
  const { ctx, setCtx } = useContext(GameContext);

  return (
    <Container
      onClick={() => {
        setCtx(setStep(page, ctx));
      }}
    >
      <Icon
        src={assetsPath.arrowBack}
        pointer-events="auto"
      />
    </Container>
  );
}
