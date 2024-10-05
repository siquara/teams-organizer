import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonStyleProps;
};

export function ButtonIcon({ icon, type = "primary", ...rest }: ButtonIconProps) {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
