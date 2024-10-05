import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Title } from "./styles";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActived = false, ...rest }: FilterProps) {
  return (
    <Container {...rest} isActived={isActived}>
      <Title>{title}</Title>
    </Container>
  );
}
