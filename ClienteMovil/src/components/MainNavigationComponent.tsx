import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainStack from "../stack/MainStack";
import FriendsScreen from "../screens/FriendsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const MainNavigationComponent = () => {
  return (
    <Tab.Navigator
    /*screenOptions={({ navigation }: { navigation: any }) => ({
      headerRight: ({ tintColor }) => (
          <View style={{ flexDirection: "row" }}>
            <Icon
              name="bell"
              size={20}
              color={tintColor}
              onPress={() => navigation.navigate("Notification")}
            />
            <Icon
              name="bell"
              size={20}
              color={tintColor}
              onPress={() => navigation.navigate("Notification")}
            />
          </View>
        ),
      })}*/
    >
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: "Friends",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-multiple" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Notifications",
          tabBarShowLabel: false,
          //tabBarBadge: "",
          tabBarBadgeStyle: scriptStyles.tabBarBadgeStyle,
          tabBarIcon: ({ color }) => {
            return <Icon name="bell" size={22} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const scriptStyles = StyleSheet.create({
  tabBarBadgeStyle: {
    minWidth: 10,
    maxHeight: 10,
    borderRadius: 100,
  },
});

export default MainNavigationComponent;
