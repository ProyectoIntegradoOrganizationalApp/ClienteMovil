// Componentes
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Pantallas
import BoardsListScreen from "./BoardsListScreen";
import ProjectsInstalledAppsScreen from "./ProjectsInstalledAppsScreen";
import ProjectsMembersScreen from "./ProjectsMembersScreen";

const Tab = createMaterialTopTabNavigator();

const ProjectsSingleScreen = () => {
  return (
    <Tab.Navigator>
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
