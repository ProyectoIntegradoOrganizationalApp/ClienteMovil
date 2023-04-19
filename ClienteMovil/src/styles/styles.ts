import { StyleSheet } from "react-native";
import colors from "tailwindcss/colors";

const styles = {
  colors: {
    grey400: colors.slate[400],
    grey500: colors.slate[500],
    grey600: colors.slate[600],
    grey700: colors.slate[700],
    grey800: colors.slate[800],
  },
  loginStyles: StyleSheet.create({
    viewContainer: {
      padding: 20,
    },
    scrollView: {
      height: "100%",
      justifyContent: "center",
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
      textAlign: "center",
      fontSize: 16,
    },
    textTitle: {
      textAlign: "left",
      fontSize: 30,
      fontWeight: "bold",
      fontFamily: "Mulish",
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
};

export default styles;
