// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Pantallas
import ProjectsListScreen from "./ProjectsListScreen";
import FriendProfileScreen from "./FriendProfileScreen";
import CreateProjectScreen from "./CreateProjectScreen";
import EditProjectScreen from "./EditProjectScreen";

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
          title: "Create Project",
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
          title: "Edit Project",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={EditProjectScreen}
      />
    </Stack.Navigator>
  );
};

export default ProjectsScreen;
