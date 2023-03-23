import { ReactElement } from "react";
import { Container } from "./components";

export default function ContactTop({children}:{children:ReactElement|ReactElement[]}) {
  return (
    <Container>
        {children}
    </Container>
  )
}
