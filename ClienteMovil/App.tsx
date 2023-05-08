import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationComponent from "./src/components/MainNavigationComponent";
import AccountStack from "./src/stack/AccountStack";

export default function App() {
  const isUserLoggedIn = true;
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <StatusBar />
      <NavigationContainer>
        {isUserLoggedIn ? <MainNavigationComponent /> : <AccountStack />}
      </NavigationContainer>
    </ApplicationProvider>
  );
}
