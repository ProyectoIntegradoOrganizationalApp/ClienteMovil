import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrganizationScreen from "../screens/OrganizationScreen";
import BoardScreen from "../screens/BoardScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Organization"
        component={OrganizationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Board"
        component={BoardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
