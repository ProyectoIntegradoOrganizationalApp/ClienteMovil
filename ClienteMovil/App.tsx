import { useContext } from "react";
import { AuthContext } from "./src/context/AuthContext";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationComponent from "./src/components/MainNavigationComponent";
import AccountStack from "./src/stack/AccountStack";

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar />
      <NavigationContainer>
        {user ? <MainNavigationComponent /> : <AccountStack />}
      </NavigationContainer>
    </ApplicationProvider>
  );
}
