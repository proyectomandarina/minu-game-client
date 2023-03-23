import { Container, Label, MainInput } from "./components";

export default function Textarea({
  children,
  placeholder,
}: {
  children: string;
  placeholder: string;
}) {
  return (
    <Container>
      <Label>{children}</Label>
      <MainInput placeholder={placeholder}/>
    </Container>
  );
}
