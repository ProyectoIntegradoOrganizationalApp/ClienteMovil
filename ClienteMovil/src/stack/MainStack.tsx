// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsSingleScreen from "../screens/ProjectsSingleScreen";
import BoardsSingleScreen from "../screens/BoardsSingleScreen";
import CreateBoardScreen from "../screens/CreateBoardScreen";
import ChatScreen from "../screens/ChatScreen";
import ProjectsAppsScreen from "../screens/ProjectsAppsScreen";

// Estilos
import styles from "../styles/styles";
import EditBoardScreen from "../screens/EditBoardScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const { colors } = styles();

  return (
    <Stack.Navigator initialRouteName="Projects">
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
        name="BoardSingle"
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
        name="CreateBoard"
        options={{
          title: "Create Board",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={CreateBoardScreen}
      />
      <Stack.Screen
        name="EditBoard"
        options={{
          title: "Edit Board",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={EditBoardScreen}
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
