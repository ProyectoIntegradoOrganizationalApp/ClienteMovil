// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsSingleScreen from "../screens/ProjectsSingleScreen";
import BoardsSingleScreen from "../screens/BoardsSingleScreen";
import ProjectsAppsScreen from "../screens/ProjectsAppsScreen";
import ChatScreen from "../screens/ChatScreen";

// Estilos
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { colors } = styles();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ headerShown: false, headerShadowVisible: false }}
      />
      <Stack.Screen
        name="ProjectsSingle"
        component={ProjectsSingleScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.projectTitle,
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
      <Stack.Screen
        name="Board"
        component={BoardsSingleScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.boardTitle,
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
      <Stack.Screen
        name="ProjectsApps"
        component={ProjectsAppsScreen}
        options={() => ({
          title: "Apps for install",
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.friendName,
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
