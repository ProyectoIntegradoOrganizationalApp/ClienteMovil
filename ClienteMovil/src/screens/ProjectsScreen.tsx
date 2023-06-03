// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Pantallas
import ProjectsListScreen from "./ProjectsListScreen";
import FriendProfileScreen from "./FriendProfileScreen";
import CreateProjectScreen from "./CreateProjectScreen";
import EditProjectScreen from "./EditProjectScreen";
import ProjectsSettingsScreen from "./ProjectsSettingsScreen";

// Estilos
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

const ProjectsScreen = ({ navigation }: { navigation: any }) => {
  const { colors } = styles();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsList"
        options={{
          title: "Projects",
          headerRight: () => (
            <Icon
              name="cog"
              color={colors.primary}
              size={23}
              onPress={() => navigation.navigate("ProjectsSettings")}
            />
          ),
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={ProjectsListScreen}
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
        name="CreateProject"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={CreateProjectScreen}
      />
      <Stack.Screen
        name="EditProject"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={EditProjectScreen}
      />
      <Stack.Screen
        name="ProjectsSettings"
        options={{
          title: "Settings",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={ProjectsSettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProjectsScreen;
