// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsSingleScreen from "../screens/ProjectsSingleScreen";
import BoardsSingleScreen from "../screens/BoardsSingleScreen";
import CreateBoardScreen from "../screens/CreateBoardScreen";
import EditBoardScreen from "../screens/EditBoardScreen";
import CreateColumnScreen from "../screens/CreateColumnScreen";
import EditColumnScreen from "../screens/EditColumnScreen";
import ChatScreen from "../screens/ChatScreen";
import InviteMemberScreen from "../screens/InviteMemberScreen";
import FriendProfileScreen from "../screens/FriendProfileScreen";
import ProjectsAppsScreen from "../screens/ProjectsAppsScreen";
import CreateTaskScreen from "../screens/CreateTaskScreen";
import EditTaskScreen from "../screens/EditTaskScreen";

// Estilos
import styles from "../styles/styles";

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
        name="CreateColumn"
        options={{
          title: "Create Column",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={CreateColumnScreen}
      />
      <Stack.Screen
        name="EditColumn"
        options={{
          title: "Edit Column",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={EditColumnScreen}
      />
      <Stack.Screen
        name="CreateTask"
        options={{
          title: "Create Task",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={CreateTaskScreen}
      />
      <Stack.Screen
        name="EditTask"
        options={{
          title: "Edit Task",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={EditTaskScreen}
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
        name="InviteMember"
        component={InviteMemberScreen}
        options={() => ({
          title: "Invite member",
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
      <Stack.Screen
        name="FriendProfile"
        component={FriendProfileScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.friendName,
          headerTintColor: colors.text,
          headerShadowVisible: false,
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
