import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrganizationScreen from "../screens/OrganizationScreen";
import BoardScreen from "../screens/BoardScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Organization"
        component={OrganizationScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.organizationTitle,
        })}
      />
      <Stack.Screen
        name="Board"
        component={BoardScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.boardTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
