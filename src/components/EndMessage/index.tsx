import { MESSAGES } from "../../constants";
import { Container } from "./components";
import Alert from "../Alert";

const EndMessage = ({ dif }: { dif: number }) => {
  const message = MESSAGES.find((message) => message.max > (dif / 1000));
  return (
    <Container>
      <h3>{message?.title}</h3>
      {message?.paragraph ? <p>{message.paragraph}</p> : <img />}
      <Alert>{message?.alert}</Alert>
    </Container>
  );
};

export default EndMessage;
