import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProjectsListScreen from "./ProjectsListScreen";
import ProjectsSettingsScreen from "./ProjectsSettingsScreen";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const ProjectsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ProjectsList"
        options={{ title: "Projects" }}
        component={ProjectsListScreen}
      />
      <Tab.Screen
        name="ProjectsSettings"
        options={{ title: "Settings" }}
        component={ProjectsSettingsScreen}
      />
    </Tab.Navigator>
  );
};

const scriptStyles = StyleSheet.create({});

export default ProjectsScreen;
