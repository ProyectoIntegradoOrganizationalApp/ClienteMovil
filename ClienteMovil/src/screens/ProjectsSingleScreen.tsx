import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import BoardsListScreen from "./BoardsListScreen";
import ProjectsInstalledAppsScreen from "./ProjectsInstalledAppsScreen";
import ProjectsMembersScreen from "./ProjectsMembersScreen";
import { StyleSheet } from "react-native";

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

const scriptStyles = StyleSheet.create({});

export default ProjectsSingleScreen;
