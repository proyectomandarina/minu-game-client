import assetsPath from "./data/assets-path";
import { STEPS, LANGUAGES } from "./types";

export const INITIAL_CTX = {
  step: STEPS.HOME,
  firstTime: 0,
  secondTime: 0,
  hasFinish: false,
  currentLanguage: LANGUAGES.ES
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

const TIME_WATCHING_PHONE = {
  [LANGUAGES.ES]: "En el tiempo que tardaste mirando el celular recorriste",
  [LANGUAGES.POR]: "No tempo que você passou olhando para o seu celular, você viajou"
}

const TRANSPORT_WAYS = {
  route: {
    [LANGUAGES.ES]: "por la ruta",
    [LANGUAGES.POR]: "pela rota."
  },
  highway: {
    [LANGUAGES.ES]: "por la autopista.",
    [LANGUAGES.POR]: "pela rodovia."
  },
  avenue: {
    [LANGUAGES.ES]: "por la avenida.",
    [LANGUAGES.POR]: "pela avenida."
  },
  street: {
    [LANGUAGES.ES]: "por la calle.",
    [LANGUAGES.POR]: "pela rua."
  },
  bicycle: {
    [LANGUAGES.ES]: "en la bici.",
    [LANGUAGES.POR]: "na bicicleta."
  }
}

export const MESSAGES = [
  {
    max: 2,
    _title: {
      [LANGUAGES.ES]: "¿Cumpliste de verdad las consignas distractivas?",
      [LANGUAGES.POR]: "Você realmente cumpriu as instruções diversivas?"
    },
    paragraph: {
      [LANGUAGES.ES]: "Recordá que este juego no es para ganar, sino para darnos cuenta del peligro de distraerse en la calle.",
      [LANGUAGES.POR]: "Lembre-se que este jogo não é para vencer, mas para perceber o perigo de se distrair na rua."
    },
    alert: "VUELVE A INTENTARLO DE NUEVO",
  },
  {
    max: 5,
    title: (distance: number, language: LANGUAGES) =>
      `${TIME_WATCHING_PHONE[language]} ${distance}m ${TRANSPORT_WAYS.highway[language]}`,
    velocity: 36.1,
    velocityImg: assetsPath.km130,
    mediumImg: assetsPath.car
  },
  {
    max: 8,
    title: (distance: number, language: LANGUAGES) =>
      `${TIME_WATCHING_PHONE[language]} ${distance}m ${TRANSPORT_WAYS.route[language]}`,
    velocity: 30.5,
    velocityImg: assetsPath.km110,
    mediumImg: assetsPath.car
  },
  {
    max: 11,
    title: (distance: number, language: LANGUAGES) =>
      `${TIME_WATCHING_PHONE[language]} ${distance}m ${TRANSPORT_WAYS.route[language]}`,
    velocity: 22.2,
    velocityImg: assetsPath.km80,
    mediumImg: assetsPath.car
  },
  {
    max: 15,
    title: (distance: number, language: LANGUAGES) =>
      `${TIME_WATCHING_PHONE[language]} ${distance}m ${TRANSPORT_WAYS.avenue[language]}`,
    velocity: 13.8,
    velocityImg: assetsPath.km50,
    mediumImg: assetsPath.car
  },
  {
    max: 20,
    title: (distance: number, language: LANGUAGES) =>
      `${TIME_WATCHING_PHONE[language]} ${distance}m ${TRANSPORT_WAYS.street[language]}`,
    velocity: 8.3,
    velocityImg: assetsPath.km30,
    mediumImg: assetsPath.car
  },
  {
    max: 30,
    title: (distance: number, language: LANGUAGES) =>
      `${TIME_WATCHING_PHONE[language]} ${distance}m ${TRANSPORT_WAYS.bicycle[language]}`,
    velocity: 4.1,
    velocityImg: assetsPath.km15,
    mediumImg: assetsPath.bicicle
  },
  {
    _title: {
      [LANGUAGES.ES]: "Como peaton, cruzaste una avenida muy ancha sin mirar!",
      [LANGUAGES.POR]: "Como pedestre, você atravessou uma avenida muito larga sem olhar!"
    },
    velocityImg: assetsPath.person
  },
];
