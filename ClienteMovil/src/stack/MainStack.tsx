import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsSingleScreen from "../screens/ProjectsSingleScreen";
import BoardsSingleScreen from "../screens/BoardsSingleScreen";
import ProjectsAppsScreen from "../screens/ProjectsAppsScreen";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen
        name="ProjectsSingle"
        component={ProjectsSingleScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.projectTitle,
        })}
      />
      <Stack.Screen
        name="Board"
        component={BoardsSingleScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.boardTitle,
        })}
      />
      <Stack.Screen
        name="ProjectsApps"
        component={ProjectsAppsScreen}
        options={() => ({
          title: "Apps for install",
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
