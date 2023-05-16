import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FriendsListScreen from "../screens/FriendsListScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import FriendsSettingsScreen from "../screens/FriendsSettingsScreen";
import { StyleSheet } from "react-native";

const Tab = createMaterialTopTabNavigator();

const FriendsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FriendsList"
        options={{ title: "Friends" }}
        component={FriendsListScreen}
      />
      <Tab.Screen name="Add Friend" component={AddFriendScreen} />
      <Tab.Screen
        name="FriendsSettings"
        options={{ title: "Settings" }}
        component={FriendsSettingsScreen}
      />
    </Tab.Navigator>
  );
};

const scriptStyles = StyleSheet.create({});

export default FriendsScreen;
