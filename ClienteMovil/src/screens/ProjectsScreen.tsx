import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectsListScreen from "./ProjectsListScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ProjectsSettingsScreen from "./ProjectsSettingsScreen";

const Stack = createNativeStackNavigator();

const ProjectsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProjectsList"
        options={{
          title: "Projects",
          headerRight: () => (
            <Icon
              name="cog"
              size={23}
              onPress={() => navigation.navigate("ProjectsSettings")}
            />
          ),
        }}
        component={ProjectsListScreen}
      />
      <Stack.Screen
        name="ProjectsSettings"
        options={{ title: "Settings" }}
        component={ProjectsSettingsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProjectsScreen;
