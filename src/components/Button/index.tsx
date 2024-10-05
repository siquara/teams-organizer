import { ButtonStyleProps, Container, Title } from "./styles";

type ButtonProps = {
  type?: ButtonStyleProps;
  title: string;
};

export function Button({ type = "primary", title, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
