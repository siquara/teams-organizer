
import { CaretLeft } from "phosphor-react-native";
import { Container, Logo } from "./styles";

import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <CaretLeft />
      <Logo source={logoImg} />
    </Container>
  );
}
