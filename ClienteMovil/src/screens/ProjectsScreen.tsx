// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Pantallas
import ProjectsListScreen from "./ProjectsListScreen";
import CreateProjectScreen from "./CreateProjectScreen";
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
        name="Create Project"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
        component={CreateProjectScreen}
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
