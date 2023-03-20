import { Dispatch, SetStateAction } from "react";

export enum STEPS {
  "HOME",
  "STEP_1",
  "MIDDLE",
  "STEP_2",
  "END",
  "INSTRUCTIONS",
  "CONTACT",
}

export interface Ctx {
  step: STEPS;
  firstTime: string;
  secondTime: string;
  hasFinish: boolean;
}

export interface StateContext {
  ctx: Ctx;
  setCtx: Dispatch<SetStateAction<Ctx>>;
}