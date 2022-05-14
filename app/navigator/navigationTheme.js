import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/config";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
