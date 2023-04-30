import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileProjectsScreen from "../screens/ProfileProjectsScreen";

const Tab = createMaterialTopTabNavigator();

const ProfileNavigationComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Achievements" component={AchievementsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Your Projects" component={ProfileProjectsScreen} />
    </Tab.Navigator>
  );
};

export default ProfileNavigationComponent;

// TODO: Remove file
