import { STEPS } from "./types";

export const INITIAL_CTX = {
  step: STEPS.HOME,
  firstTime: "00:00:00:000",
  secondTime: "00:00:00:000",
  hasFinish: false,
};

export const formatMilliseconds = (milliseconds: number) => {
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
  const millisecondsFormatted = Math.floor(milliseconds % 1000).toString().padStart(3, '0');
  const secondsFormatted = seconds.toString().padStart(2, '0');
  const minutesFormatted = minutes.toString().padStart(2, '0');
  const hoursFormatted = hours.toString().padStart(2, '0');
  return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}:${millisecondsFormatted}`;
};
