import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainStack from "../stack/MainStack";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const MainNavigationComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigationComponent;
