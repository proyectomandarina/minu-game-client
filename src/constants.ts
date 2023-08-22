import assetsPath from "./data/assets-path";
import { STEPS } from "./types";

export const INITIAL_CTX = {
  step: STEPS.HOME,
  firstTime: 0,
  secondTime: 0,
  hasFinish: false,
  currentLanguage: 'es'
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
    _title: "¿Cumpliste de verdad las consignas distractivas?",
    paragraph:
      "Recordá que este juego no es para ganar, sino para darnos cuenta del peligro de distraerse en la calle.",
    alert: "VUELVE A INTENTARLO DE NUEVO",
  },
  {
    max: 5,
    title: (distance: number) =>
      `En el tiempo que tardaste mirando el celular recorriste ${distance}m por la autopista`,
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocity: 36.1,
    velocityImg: assetsPath.km130,
    mediumImg: assetsPath.car
  },
  {
    max: 8,
    title: (distance: number) =>
      `En el tiempo que tardaste mirando el celular recorriste ${distance}m por la ruta`,
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocity: 30.5,
    velocityImg: assetsPath.km110,
    mediumImg: assetsPath.car
  },
  {
    max: 11,
    title: (distance: number) =>
      `En el tiempo que tardaste mirando el celular recorriste ${distance}m por la ruta`,
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocity: 22.2,
    velocityImg: assetsPath.km80,
    mediumImg: assetsPath.car
  },
  {
    max: 15,
    title: (distance: number) =>
      `En el tiempo que tardaste mirando el celular recorriste ${distance}m por la avenida`,
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocity: 13.8,
    velocityImg: assetsPath.km50,
    mediumImg: assetsPath.car
  },
  {
    max: 20,
    title: (distance: number) =>
      `En el tiempo que tardaste mirando el celular recorriste ${distance}m por la calle`,
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocity: 8.3,
    velocityImg: assetsPath.km30,
    mediumImg: assetsPath.car
  },
  {
    max: 30,
    title: (distance: number) =>
      `En el tiempo que tardaste mirando el celular recorriste ${distance}m en la bici`,
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocity: 4.1,
    velocityImg: assetsPath.km15,
    mediumImg: assetsPath.bicicle
  },
  {
    _title: "Como peaton, cruzaste una avenida muy ancha sin mirar!",
    alert:
      "EL USAR EL CELULAR CUADRIPLICA NUESTRAS CHANCES DE TENER UN SINIESTRO VIAL",
    velocityImg: assetsPath.person
  },
];
