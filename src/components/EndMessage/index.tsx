import { MESSAGES } from "../../constants";
import { Container } from "./components";
import EndMessageImg from "../EndMessageImg";

const EndMessage = ({ dif }: { dif: number }) => {
  const diferenceInSeconds = dif / 1000;
  let distance;

  let message = MESSAGES.find((message) => {
    if (message.max && message.max > diferenceInSeconds) return message;
  });

  if (message === undefined) {
    message = MESSAGES[MESSAGES.length - 1];
  } // Si el tiempo es superior a todos los 'max' de los mensajes (utiliza el ultimo).

  message.velocity
    ? (distance = Math.round(diferenceInSeconds * message.velocity))
    : undefined;

  return (
    <Container>
      {message.velocityImg || message.mediumImg ? (
        <EndMessageImg
          distance={distance}
          velocityImg={message.velocityImg}
          mediumImg={message.mediumImg}
        />
      ) : (
        <></>
      )}
      <h3>{message._title}</h3>
      <h3>{distance && message.title ? message.title(distance) : null}</h3>
      <p>{message.paragraph}</p>
    </Container>
  );
};

export default EndMessage;
