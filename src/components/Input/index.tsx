import { useTheme } from "styled-components/native";
import { Container } from "./styles";


export function Input({ ...rest }) {
    const { COLORS } = useTheme();
  return <Container
  placeholderTextColor={COLORS.GRAY_300}
   {...rest} />;
}
