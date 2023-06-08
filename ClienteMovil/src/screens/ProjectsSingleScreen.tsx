// Componentes
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Pantallas
import ProjectsAppsScreen from "./ProjectsAppsScreen";
import ProjectsMembersScreen from "./ProjectsMembersScreen";

// Estilos
import styles from "../styles/styles";

const Tab = createMaterialTopTabNavigator();

const ProjectsSingleScreen = ({ route }: { route: any }) => {
  const { project } = route.params;

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
        name="ProjectsApps"
        options={{ title: "Apps" }}
        component={ProjectsAppsScreen}
        initialParams={{ project: project }}
      />
      <Tab.Screen
        name="ProjectsMembers"
        options={{ title: "Members" }}
        component={ProjectsMembersScreen}
        initialParams={{ project: project }}
      />
    </Tab.Navigator>
  );
};

export default ProjectsSingleScreen;
