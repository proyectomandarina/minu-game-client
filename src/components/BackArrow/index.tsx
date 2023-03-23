import assetsPath from "../../data/assets-path";
import styled from "styled-components";
import { STEPS } from "../../types";
import { setStep } from "../../context";
import { useContext } from "react";
import { GameContext } from "../../context";

export const Container = styled.div`
  padding: 1em;
`;
export const Icon = styled.svg`
  width: 2em;
`;

export default function BackArrow({ page, color }: { page: STEPS, color: string }) {
  const { ctx, setCtx } = useContext(GameContext);

  return (
    <Container
      onClick={() => {
        setCtx(setStep(page, ctx));
      }}
    >
      <Icon
        width="30"
        height="42"
        viewBox="0 0 30 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 21.2743C24 21.654 23.7178 21.9678 23.3518 22.0174L23.25 22.0243L8.25 22.0243C7.83579 22.0243 7.5 21.6885 7.5 21.2743C7.5 20.8946 7.78215 20.5808 8.14823 20.5311L8.25 20.5243L23.25 20.5243C23.6642 20.5243 24 20.8601 24 21.2743Z"
          fill={color}
        />
        <path
          d="M14.829 26.7672C15.1225 27.0595 15.1235 27.5344 14.8313 27.8279C14.5656 28.0947 14.149 28.1198 13.8549 27.9026L13.7706 27.8302L7.72062 21.8062C7.45298 21.5397 7.42863 21.1216 7.64759 20.8275L7.72057 20.7433L13.7706 14.7183C14.0641 14.426 14.5389 14.427 14.8312 14.7205C15.0969 14.9873 15.1203 15.404 14.9018 15.6972L14.829 15.7811L9.313 21.275L14.829 26.7672Z"
          fill={color}
        />
        <rect
          x="1"
          y="1"
          width="28"
          height="40"
          rx="14"
          stroke={color}
          stroke-width="2"
        />
      </Icon>
    </Container>
  );
}
