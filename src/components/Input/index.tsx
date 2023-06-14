import { Container, Label, MainInput } from "./components";

export default function Input({
  children,
  type,
  placeholder,
}: {
  children: string;
  type: string;
  placeholder: string;
}) {
  return (
    <Container>
      <Label>{children}</Label>
      <MainInput type={type} placeholder={placeholder}/>
    </Container>
  );
}
