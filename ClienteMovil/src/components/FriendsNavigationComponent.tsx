import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FriendsListScreen from "../screens/FriendsListScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import FriendsSettingsScreen from "../screens/FriendsSettingsScreen";

const Tab = createMaterialTopTabNavigator();

const FriendsNavigationComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FriendsList"
        options={{ title: "Friends" }}
        component={FriendsListScreen}
      />
      <Tab.Screen name="Add Friend" component={AddFriendScreen} />
      <Tab.Screen name="Settings" component={FriendsSettingsScreen} />
    </Tab.Navigator>
  );
};

export default FriendsNavigationComponent;
