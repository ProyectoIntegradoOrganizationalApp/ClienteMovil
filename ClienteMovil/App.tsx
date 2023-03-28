import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigationComponent from "./src/components/MainNavigationComponent";
import AccountStack from "./src/stack/AccountStack";

export default function App() {
  const isUserLoggedIn = true;
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        {isUserLoggedIn ? <MainNavigationComponent /> : <AccountStack />}
      </NavigationContainer>
    </>
  );
}
