import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleProps = "primary" | "secondary";

type ButtonProps = {
  type: ButtonStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(({ theme, type }) => ({
    size: 24,
    color: type === "primary" ? theme.COLORS.GREEN_700: theme.COLORS.RED,
}))`
  width: 32px;
  height: 32px;
`;
