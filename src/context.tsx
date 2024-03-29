import React from "react";
import { INITIAL_CTX } from "./constants";
import { Ctx, LANGUAGES, StateContext, STEPS } from "./types";

export const GameContext = React.createContext<StateContext>({
  ctx: INITIAL_CTX,
  setCtx: () => undefined,
});

export const setStep = (step: STEPS, ctx: Ctx) => {
  return { ...ctx, step: step };
};

export const changeLanguage = (newLanguage: LANGUAGES, ctx: Ctx) => {
  return { ...ctx, currentLanguage: newLanguage };
}
