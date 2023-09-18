import { LANGUAGES } from "../types";

const language = {
  [LANGUAGES.ES]: {
    homeAlert:
      "¡CUANDO MANEJAMOS TODA NUESTRA ATENCION DEBE ESTAR EN LA CALLE!",
    startButton: "COMENZAR",
    instructionsButton: "Instrucciones",
    contactButton: "Contacto",
    rulesTitle: "Reglas del juego",
    rulesDescription: {
      one: "El objetivo de este juego es darnos cuenta del tiempo que nos quita cada distracción. Para eso, primero vas a jugar prestando atención. Tenés que tocar los botones que se vayan iluminando lo más rápido que puedas. Cada uno representa una situación que podrías encontrarte al transitar. Un contador va a registrar el tiempo que te lleva completar la secuencia. Después vas a volver a jugar, pero ahora vas a estar siendo distraído. Lo ideal es que juegues con un celular aparte del dispositivo en el que corre el juego. Otra persona te va a dar consignas distractivas que tenés que cumplir:",
      two: "Estos son solo ejemplos de las muchas cosas con las que alguien podria ditraerse al manejar. Durante la segunda ronda, quien te distraiga debe decirte dos consignas para que cumplas mientras jugas.",
    },
    rulesAlert: "Distracciones",
    rulesExamples: [
      "Escribi un Whatsapp que diga 'yendo'.",
      "Envia un audio de Whatsapp contando que queres cenar hoy.",
      "Busca la direccion de tu casa en Google Maps o Waze y dale iniciar al viaje.",
      "Elegi una cancion en Spotify o aplicaciones de reproduccion de musica y darle play.",
    ],
    contactTitle: "Dejanos tu opinion",
    roundTitle: "Ronda",
    counterTitle: "Contador",
    middleTitle: "Ronda finalizada",
    middleSubtitle: "COMENZAR SEGUNDA RONDA",
    middleAlertTitle: "SE VIENEN LAS DISTRACCIONES",
    middleAlertDescription:
      "Ahora hay que estar atento a las consignas que te va a decir tu capacitador y no perder la atencion a las luces que se van a encender",
    endTitle: "Fin del juego",
    timeWatchingThePhone: "Tiempo viendo el telefono",
    replayButton: "Jugar de nuevo",
    goHome: "Volver a inicio",
    replaySndCounter: "Rehacer contador 2",
  },
  [LANGUAGES.POR]: {
    homeAlert: "¡QUANDO DIRIGIMOS, TODA NOSSA ATENÇÃO DEVE SER NA RUA!",
    startButton: "COMEÇAR",
    instructionsButton: "Instruções",
    contactButton: "Contato",
    rulesTitle: "Regras do jogo",
    rulesDescription: {
      one: "O objetivo deste jogo é perceber quanto tempo cada distração nos tira. Para isso, primeiro você vai brincar prestando atenção. Você tem que tocar nos botões que acendem o mais rápido que puder. Cada um representa uma situação que você pode encontrar ao viajar. Um cronômetro registrará o tempo que você leva para concluir a sequência. Aí você vai jogar de novo, mas agora vai se distrair. O ideal é jogar com um celular separado do aparelho no qual o jogo roda. Outra pessoa lhe dará instruções distrativas que você deve cumprir:",
      two: "Estes são apenas exemplos das muitas coisas que podem distrair alguém enquanto dirige. Durante o segundo turno, quem o distrair deve lhe dar dois comandos para você seguir durante o jogo.",
    },
    rulesAlert: "Distrações",
    rulesExamples: [
      "Escreva um Whatsapp que diga 'indo'.",
      "Mande um áudio de WhatsApp dizendo que quer jantar hoje.",
      "Encontre o endereço da sua casa no Google Maps ou Waze e comece a viagem.",
      "Escolha uma música no Spotify ou nos aplicativos de tocador de música e aperte o play.",
    ],
    contactTitle: "Deixe-nos a sua opinião",
    roundTitle: "Redondo",
    counterTitle: "Contador",
    middleTitle: "Rodada terminada",
    middleSubtitle: "COMECE A SEGUNDA RODADA",
    middleAlertTitle: "AS DISTRAÇÕES ESTÃO CHEGANDO",
    middleAlertDescription:
      "Agora você tem que estar atento às instruções que seu treinador vai lhe dar e não perder a atenção com as luzes que vão acender.",
    endTitle: "Fim do jogo",
    timeWatchingThePhone: "Tempo assistindo o telefone",
    replayButton: "Jogar de novo",
    goHome: "Voltar para começar",
    replaySndCounter: "Refazer contador 2",
  },
};

export default language;
