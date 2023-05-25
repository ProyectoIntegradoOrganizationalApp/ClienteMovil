import { useContext } from "react";
import {
  ThemeContext,
  ThemeContextProps,
} from "../domain/context/ThemeContext";
import colors from "tailwindcss/colors";
import { StyleSheet } from "react-native";

const lightColors = {
  primary: "red",
  secondary: "#F2F2F2",
};

const darkColors = {
  primary: "green",
  secondary: "#1C1C1C",
};

const getColors = (theme: string) => {
  const colorPalette = theme === "light" ? lightColors : darkColors;

  return {
    primary: colorPalette.primary,
    grey400: colors.slate[400],
    grey500: colors.slate[500],
    grey600: colors.slate[600],
    grey700: colors.slate[700],
    grey800: colors.slate[800],
  };
};

const styles = () => {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);
  const colors = getColors(theme);

  return {
    colors: {
      primary: colors.primary,
      grey400: colors.grey400,
      grey500: colors.grey500,
      grey600: colors.grey600,
      grey700: colors.grey700,
      grey800: colors.grey800,
    },
    components: {
      button: {
        button: {
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 0,
          elevation: 3,
        },
        buttonPrimary: {
          backgroundColor: colors.grey800,
        },
        buttonSecondary: {
          backgroundColor: colors.grey500,
        },
        buttonGoogle: {
          height: 48,
          backgroundColor: "#ffffff",
        },
        buttonGithub: {
          height: 48,
          backgroundColor: "#1b1f23",
        },
        buttonConfirm: {
          backgroundColor: "#008f39",
        },
        buttonNormalSize: {},
        buttonSmallSize: {
          width: 160,
        },
        text: {
          fontSize: 16,
          lineHeight: 21,
          letterSpacing: 0.25,
          color: "white",
        },
      },
      fab: {
        margin: 15,
        right: 0,
        bottom: 0,
        borderRadius: 15,
        backgroundColor: colors.grey800,
      },
    },
    loginStyles: StyleSheet.create({
      scrollView: {
        justifyContent: "center",
      },
      viewNavigateContainer: {
        padding: 20,
        backgroundColor: "#e2e8f0",
      },
      viewContainer: {
        padding: 20,
      },
      viewImage: {
        alignItems: "center",
        marginLeft: 25,
      },
      image: {
        width: 300,
        resizeMode: "contain",
      },
      viewContainerChild: {
        marginBottom: 20,
      },
      text: {
        //fontFamily: "Mulish",
        textAlign: "center",
        fontSize: 16,
      },
      textTitle: {
        textAlign: "left",
        fontSize: 30,
        fontWeight: "bold",
      },
      textsubTitle: {
        textAlign: "left",
        fontSize: 16,
      },
      divider: {
        height: 1,
        marginVertical: 20,
        marginHorizontal: 60,
        backgroundColor: "#94a3b8",
      },
    }),
    settingsStyles: StyleSheet.create({
      generalView: {
        marginTop: 15,
        marginHorizontal: 20,
      },
      title: {
        fontSize: 15,
        textAlign: "left",
        fontWeight: "600",
        marginBottom: 5,
      },
      text: {
        fontSize: 14,
        textAlign: "left",
      },
      viewRow: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      input: {
        height: 50,
        padding: 12,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: colors.grey500,
        backgroundColor: colors.grey400,
      },
    }),
  };
};

export default styles;
