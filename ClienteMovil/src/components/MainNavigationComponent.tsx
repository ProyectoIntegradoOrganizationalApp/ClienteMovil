// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainStack from "../stack/MainStack";

// Pantallas
import FriendsScreen from "../screens/FriendsScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Estilos
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const { colors } = styles();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileStack"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
          headerShadowVisible: false,
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShadowVisible: false,
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainNavigationComponent = () => {
  const { colors, components } = styles();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.tabNavigator,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: "Friends",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => {
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
          headerShadowVisible: false,
          //tabBarBadge: "",
          tabBarBadgeStyle: components.badge,
          tabBarIcon: ({ color }) => {
            return <Icon name="bell" size={22} color={color} />;
          },
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => {
            return <Icon name="account" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigationComponent;
