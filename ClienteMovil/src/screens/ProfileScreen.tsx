import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileProjectsScreen from "../screens/ProfileProjectsScreen";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Achievements" component={AchievementsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Your Projects" component={ProfileProjectsScreen} />
    </Tab.Navigator>
  );
};

const styleScript = StyleSheet.create({});

export default ProfileScreen;
