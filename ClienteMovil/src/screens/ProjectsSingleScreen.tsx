// Componentes
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Pantallas
import BoardsListScreen from "./BoardsListScreen";
import ProjectsInstalledAppsScreen from "./ProjectsInstalledAppsScreen";
import ProjectsMembersScreen from "./ProjectsMembersScreen";

// Estilos
import styles from "../styles/styles";

const Tab = createMaterialTopTabNavigator();

const ProjectsSingleScreen = () => {
  const { colors } = styles();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.tabNavigator },
        tabBarLabelStyle: { color: colors.text },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        name="BoardsList"
        options={{ title: "Boards" }}
        component={BoardsListScreen}
      />
      <Tab.Screen
        name="ProjectsInstalledApps"
        options={{ title: "Apps" }}
        component={ProjectsInstalledAppsScreen}
      />
      <Tab.Screen
        name="ProjectsMembers"
        options={{ title: "Members" }}
        component={ProjectsMembersScreen}
      />
    </Tab.Navigator>
  );
};

export default ProjectsSingleScreen;
