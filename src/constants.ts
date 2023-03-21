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
  const millisecondsFormatted = Math.floor(milliseconds % 1000)
    .toString()
    .padStart(3, "0");
  const secondsFormatted = seconds.toString().padStart(2, "0");
  const minutesFormatted = minutes.toString().padStart(2, "0");
  const hoursFormatted = hours.toString().padStart(2, "0");
  return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}:${millisecondsFormatted}`;
};

export const MESSAGES = [
  {
    max: 2,
    title: "¿Cumpliste de verdad las consignas distractivas?",
    paragraph:
      "Recordá que este juego no es para ganar, sino para darnos cuenta del peligro de distraerse en la calle.",
    alert: "VUELVE A INTENTARLO DE NUEVO",
  },
  {
    max: 5,
    title: "Autopista 130km/h - 36,1m/s",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
  },
  {
    max: 8,
    title: "Ruta rural 110km/h - 30,5m/s",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
  },
  {
    max: 11,
    title: "Velocidad máxima de camiones en rutas 80km/h - 22,2m/s",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
  },
  {
    max: 15,
    title: "Avenidas (velocidad recomendada) 50km/h - 13,8m/s",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
  },
  {
    max: 20,
    title: " Calle (velocidad recomendada) 30km/h - 8,3m/s",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
  },
  {
    max: 30,
    title: "Bici (velocidad promedio) 15km/h - 4,1m/s",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
  },
];
