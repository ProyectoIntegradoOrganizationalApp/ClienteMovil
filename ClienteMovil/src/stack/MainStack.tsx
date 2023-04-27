import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectsSingleScreen from "../screens/ProjectsSingleScreen";
import BoardScreen from "../screens/BoardScreen";

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
        component={BoardScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.boardTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
