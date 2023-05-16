import { useContext } from "react";
import { AuthContext } from "./src/context/AuthContext";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationComponent from "./src/components/MainNavigationComponent";
import AccountStack from "./src/stack/AccountStack";
import Toast from "react-native-toast-message";
import { IconButton } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const toastConfig = {
    success: ({ text1, text2 }: { text1: string; text2: string }) => (
      <View style={scriptStyles.toastRow}>
        <IconButton
          icon="check-circle"
          iconColor="#6dcf81"
          size={35}
          style={scriptStyles.toastIcon}
        />
        <View style={scriptStyles.toastText}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            {text1}
          </Text>
          <Text style={{ fontSize: 15 }}>{text2}</Text>
        </View>
      </View>
    ),
    error: ({ text1, text2 }: { text1: string; text2: string }) => (
      <View style={scriptStyles.toastRow}>
        <IconButton
          icon="close-circle"
          iconColor="#bf6060"
          size={35}
          style={scriptStyles.toastIcon}
        />
        <View style={scriptStyles.toastText}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            {text1}
          </Text>
          <Text style={{ fontSize: 15 }}>{text2}</Text>
        </View>
      </View>
    ),
  };

  const { user } = useContext(AuthContext);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar />
      <NavigationContainer>
        {!user ? <MainNavigationComponent /> : <AccountStack />}
      </NavigationContainer>
      <Toast config={toastConfig} />
    </ApplicationProvider>
  );
}

const scriptStyles = StyleSheet.create({
  toastRow: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 5,
    backgroundColor: "white",
    borderWidth: 0.2,
    borderColor: "black",
  },
  toastText: {
    width: "70%",
    padding: 2,
    marginLeft: 20,
  },
  toastIcon: {
    backgroundColor: "transparent",
  },
});
