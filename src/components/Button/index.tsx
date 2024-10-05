import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
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
