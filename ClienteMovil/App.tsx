// React
import { useState } from "react";

// Contexto
import { ThemeContextProvider } from "./src/domain/context/ThemeContext";
import { AuthContext } from "./src/domain/context/AuthContext";

// Componentes
import { User } from "./src/domain/user/User.interface";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationComponent from "./src/components/MainNavigationComponent";
import AccountStack from "./src/stack/AccountStack";
import Toast, {
  ToastConfig,
  ToastConfigParams,
} from "react-native-toast-message";
import { IconButton } from "react-native-paper";
import { Text, View } from "react-native";

// Estilos
import styles from "./src/styles/styles";

export default function App() {
  const { colors, screens } = styles();

  const toastConfig: ToastConfig = {
    success: ({ text1, text2 }: ToastConfigParams<string>) => (
      <View style={screens.app.toastRow}>
        <IconButton
          icon="check-circle"
          iconColor="#6dcf81"
          size={35}
          style={screens.app.toastIcon}
        />
        <View style={screens.app.toastText}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 5,
              color: colors.text,
            }}
          >
            {text1}
          </Text>
          <Text style={{ fontSize: 15, color: colors.text }}>{text2}</Text>
        </View>
      </View>
    ),
    error: ({ text1, text2 }: ToastConfigParams<string>) => (
      <View style={screens.app.toastRow}>
        <IconButton
          icon="close-circle"
          iconColor="#bf6060"
          size={35}
          style={screens.app.toastIcon}
        />
        <View style={screens.app.toastText}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 5,
              color: colors.text,
            }}
          >
            {text1}
          </Text>
          <Text style={{ fontSize: 15, color: colors.text }}>{text2}</Text>
        </View>
      </View>
    ),
  };

  const [user, setUser] = useState<User | null>(null);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <ThemeContextProvider>
        <AuthContext.Provider value={{ user, setUser }}>
          <StatusBar />
          <NavigationContainer>
            {user !== null ? <MainNavigationComponent /> : <AccountStack />}
          </NavigationContainer>
        </AuthContext.Provider>
        <Toast config={toastConfig} />
      </ThemeContextProvider>
    </ApplicationProvider>
  );
}
