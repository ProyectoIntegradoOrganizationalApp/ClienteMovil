// React
import { useContext } from "react";

// Contexto
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";

// Componentes
import colors from "tailwindcss/colors";
import { StyleSheet } from "react-native";
import { light as lightTheme } from "@eva-design/eva";

const darkColors = {
  background: colors.slate[600],
  primary: colors.slate[800],
  secondary: colors.slate[700],
  text: "#ffffff",
  card: colors.slate[700],
  taskIconBackground: colors.slate[600],
  tabNavigator: colors.slate[700],
  uikittenSecondary: colors.slate[700],
};

const lightColors = {
  background: colors.slate[50],
  primary: colors.slate[600],
  secondary: colors.slate[500],
  text: colors.slate[800],
  card: colors.slate[200],
  taskIconBackground: colors.slate[100],
  tabNavigator: colors.slate[100],
  uikittenSecondary: colors.slate[300],
};

const getColors = (theme: string) => {
  const colorPalette = theme === "dark" ? darkColors : lightColors;

  return {
    background: colorPalette.background,
    primary: colorPalette.primary,
    secondary: colorPalette.secondary,
    text: colorPalette.text,
    card: colorPalette.card,
    taskIconBackground: colorPalette.taskIconBackground,
    tabNavigator: colorPalette.tabNavigator,
    loader: colors.slate[500],
    uikittenPrimary: colors.slate[400],
    uikittenSecondary: colorPalette.uikittenSecondary,
  };
};

const styles = () => {
  const { theme } = useContext<ThemeContextProps>(ThemeContext);
  const colors = getColors(theme);

  return {
    colors: {
      background: colors.background,
      primary: colors.primary,
      secondary: colors.secondary,
      text: colors.text,
      card: colors.card,
      tabNavigator: colors.tabNavigator,
      loader: colors.loader,
    },
    components: {
      activityIndicator: StyleSheet.create({
        text: {
          marginRight: 20,
          fontSize: 32,
          fontWeight: "800",
          color: colors.text,
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
          backgroundColor: colors.card,
        },
        boardChevronIcon: {
          color: colors.text,
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
          backgroundColor: colors.primary,
        },
        buttonSecondary: {
          backgroundColor: colors.secondary,
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
        theme: {
          ...lightTheme,
          "text-basic-color": colors.text,
          "text-disabled-color": colors.uikittenPrimary,
          "text-hint-color": colors.uikittenPrimary,
          "color-primary-500": colors.primary,
        },
      },
      card: {
        borderRadius: 5,
        marginTop: 15,
        marginHorizontal: 10,
        backgroundColor: colors.card,
      },
      divider: StyleSheet.create({
        container: {
          flexDirection: "row",
          alignItems: "center",
        },
        subcontainer: {
          flex: 1,
          height: 1,
          backgroundColor: colors.text,
        },
        text: {
          width: 50,
          textAlign: "center",
          color: colors.text,
        },
      }),
      fab: {
        margin: 15,
        right: 0,
        bottom: 0,
        borderRadius: 15,
        backgroundColor: colors.primary,
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
          color: colors.text,
        },
        filterSelect: {
          flex: 1,
        },
        filterSelectTheme: {
          ...lightTheme,
          "text-basic-color": colors.text,
          "text-disabled-color": colors.uikittenPrimary,
          "text-hint-color": colors.uikittenPrimary,
          "border-basic-color-4": colors.primary,
          "background-basic-color-1": colors.uikittenSecondary,
          "background-basic-color-2": colors.uikittenSecondary,
          "color-primary-500": colors.primary,
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
          backgroundColor: colors.taskIconBackground,
          color: colors.text,
        },
      },
      input: {
        backgroundColor: colors.background,
      },
      link: {
        color: colors.primary,
      },
      modal: StyleSheet.create({
        modal: {
          borderRadius: 5,
          marginTop: 15,
          marginHorizontal: 10,
          backgroundColor: colors.card,
        },
        cardTitle: {
          marginTop: 10,
          borderBottomWidth: 2,
          borderBottomColor: colors.loader,
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
          backgroundColor: colors.uikittenSecondary,
        },
      }),
    },
    screens: {
      accountManagement: StyleSheet.create({
        scrollView: {
          backgroundColor: colors.background,
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
          textAlign: "center",
          fontSize: 16,
          color: colors.text,
        },
        textTitle: {
          textAlign: "left",
          fontSize: 30,
          fontWeight: "bold",
          color: colors.text,
        },
        textsubTitle: {
          textAlign: "left",
          fontSize: 16,
          color: colors.text,
        },
        divider: {
          height: 1,
          marginVertical: 20,
          marginHorizontal: 60,
        },
      }),
      achievements: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.background,
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
      activity: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      addFriends: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      app: StyleSheet.create({
        toastRow: {
          width: "90%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: 5,
          backgroundColor: colors.card,
          borderWidth: 0.2,
        },
        toastText: {
          width: "70%",
          padding: 2,
          marginLeft: 20,
        },
        toastIcon: {
          backgroundColor: "transparent",
        },
      }),
      boardsList: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      friendsList: StyleSheet.create({
        background: {
          paddingTop: 15,
          backgroundColor: colors.background,
        },
      }),
      notifications: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      profile: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
        cardContent: {
          marginTop: 10,
        },
        menuItem: {
          marginVertical: 5,
        },
      }),
      profileProjects: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      projectsApps: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      projectsInstalledApps: StyleSheet.create({
        background: {
          paddingTop: 15,
          backgroundColor: colors.background,
        },
      }),
      projectsList: StyleSheet.create({
        background: {
          backgroundColor: colors.background,
        },
      }),
      projectsMembers: StyleSheet.create({
        background: {
          paddingTop: 15,
          backgroundColor: colors.background,
        },
        container: {
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        },
      }),
      settings: StyleSheet.create({
        generalView: {
          paddingTop: 15,
          paddingHorizontal: 20,
          backgroundColor: colors.background,
        },
        title: {
          fontSize: 15,
          textAlign: "left",
          fontWeight: "600",
          marginBottom: 5,
          color: colors.text,
        },
        text: {
          fontSize: 14,
          textAlign: "left",
          color: colors.text,
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
          borderColor: colors.primary,
          color: colors.text,
        },
      }),
    },
  };
};

export default styles;
