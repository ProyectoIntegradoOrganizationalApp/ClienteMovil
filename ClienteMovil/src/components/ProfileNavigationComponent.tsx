import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import OrganizationScreen from "../screens/OrganizationScreen";

const Tab = createMaterialTopTabNavigator();

const ProfileNavigationComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Achievements" component={AchievementsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Your Projects" component={OrganizationScreen} />
    </Tab.Navigator>
  );
};

export default ProfileNavigationComponent;
