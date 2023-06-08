// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import ProjectsListScreen from "./ProjectsListScreen";
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
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={ProjectsListScreen}
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
