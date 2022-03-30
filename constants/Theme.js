import { DarkTheme as PaperDarkTheme } from "react-native-paper";
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";

export const theme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    primary: "#4a148c",
    accent: "#d81b60",
  },
};
