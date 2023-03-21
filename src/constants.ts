import { STEPS } from "./types";

export const INITIAL_CTX = {
  step: STEPS.HOME,
  firstTime: 0,
  secondTime: 0,
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

export const MESSAGES = [
  {
    'max': 2,
    'h3': '¿Cumpliste de verdad las consignas distractivas?',
    'p': 'Recordá que este juego no es para ganar, sino para darnos cuenta del peligro de distraerse en la calle.',
    'alert': 'VUELVE A INTENTARLO DE NUEVO'
  },
  {
    'max': 5,
    'h3': 'Peatón (velocidad promedio)',
    'p': '¡Como peatón, cruzaste una avenida muy ancha sin mirar!'
  }
];
