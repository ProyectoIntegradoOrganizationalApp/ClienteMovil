// React
import { useContext } from "react";

// Contexto
import {
  ThemeContext,
  ThemeContextProps,
} from "../domain/context/ThemeContext";

// Componentes
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
      activityIndicator: StyleSheet.create({
        text: {
          marginRight: 20,
          fontSize: 32,
          fontWeight: "800",
        },
      }),
      badge: {
        minWidth: 10,
        maxHeight: 10,
        borderRadius: 100,
      },
      board: StyleSheet.create({
        board: {
          borderRadius: 5,
          marginTop: 15,
          marginHorizontal: 10,
        },
        boardCover: { borderRadius: 0, resizeMode: "cover" },
        boardChevronIcon: {
          backgroundColor: "transparent",
        },
      }),
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
      calendar: {
        borderWidth: 0,
      },
      card: {
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 10,
      },
      divider: StyleSheet.create({
        container: {
          flexDirection: "row",
          alignItems: "center",
        },
        subcontainer: {
          flex: 1,
          height: 1,
          backgroundColor: "black",
        },
        text: {
          width: 50,
          textAlign: "center",
        },
      }),
      fab: {
        margin: 15,
        right: 0,
        bottom: 0,
        borderRadius: 15,
        backgroundColor: colors.grey800,
      },
      filter: StyleSheet.create({
        filterView: {
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: 15,
          marginHorizontal: 10,
        },
        filterText: {
          marginRight: 15,
        },
        filterSelect: {
          flex: 1,
        },
      }),
      icons: {
        addIcon: {
          marginLeft: 10,
          marginRight: 15,
          borderRadius: 5,
          backgroundColor: "#008f39",
        },
        basketIcon: {
          borderRadius: 5,
          backgroundColor: "#3c6db2",
        },
        crownIcon: {
          backgroundColor: "transparent",
        },
        deleteIcon: {
          marginLeft: 10,
          marginRight: 15,
          borderRadius: 5,
          backgroundColor: "#d54f4f",
        },
        exitIcon: {
          marginLeft: 10,
          marginRight: 15,
          borderRadius: 5,
          backgroundColor: "#d54f4f",
        },
        eyeIcon: {
          borderRadius: 5,
          backgroundColor: "grey",
        },
        pencilIcon: {
          marginLeft: 10,
          borderRadius: 5,
          backgroundColor: "#3c6db2",
        },
        messageIcon: {
          borderRadius: 5,
          backgroundColor: "grey",
        },
        settingsIcon: {
          borderRadius: 5,
          backgroundColor: "transparent",
        },
        taskIcon: {
          backgroundColor: "white",
        },
      },
      modal: StyleSheet.create({
        modal: {
          borderRadius: 5,
          marginTop: 15,
          marginHorizontal: 10,
        },
        cardTitle: {
          marginTop: 10,
          borderBottomWidth: 2,
          borderBottomColor: "#ffffff",
        },
        cardIconActivity: {
          backgroundColor: "transparent",
        },
      }),
      searchbar: StyleSheet.create({
        searchbar: {
          borderRadius: 0,
          marginTop: 15,
          marginHorizontal: 10,
        },
      }),
    },
    screens: {
      accountManagement: StyleSheet.create({
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
      achievements: StyleSheet.create({
        container: {
          flex: 1,
        },
        levelContainer: {
          alignItems: "center",
          marginVertical: 15,
        },
        flatListContainer: {
          flex: 1,
          paddingBottom: 15,
        },
      }),
      profile: StyleSheet.create({
        cardContent: {
          marginTop: 10,
        },
        menuItem: {
          marginVertical: 5,
        },
      }),
      projectsMembers: StyleSheet.create({
        container: {
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        },
      }),
      settings: StyleSheet.create({
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
    },
  };
};

export default styles;
