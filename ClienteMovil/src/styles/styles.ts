import { StyleSheet } from "react-native";

const styles = {
  colors: {
    grey400: "#94a3b8",
    grey500: "#64748b",
    grey600: "#475569",
    grey700: "#334155",
    grey800: "#1e293b",
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
