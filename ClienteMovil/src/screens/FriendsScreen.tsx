// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Pantallas
import FriendsListScreen from "../screens/FriendsListScreen";
import FriendProfileScreen from "./FriendProfileScreen";
import ChatScreen from "./ChatScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import FriendsSettingsScreen from "../screens/FriendsSettingsScreen";

// Estilos
import styles from "../styles/styles";

const Stack = createNativeStackNavigator();

const FriendsScreen = ({ navigation }: { navigation: any }) => {
  const { colors } = styles();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FriendsList"
        component={FriendsListScreen}
        options={{
          title: "Friends",
          headerRight: () => (
            <Icon
              name="cog"
              color={colors.primary}
              size={23}
              onPress={() => navigation.navigate("FriendsSettings")}
            />
          ),
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="FriendProfile"
        component={FriendProfileScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.friendName,
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({ route }: { route: any }) => ({
          title: route.params.friendName,
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        })}
      />
      <Stack.Screen
        name="AddFriend"
        component={AddFriendScreen}
        options={{
          headerTintColor: colors.text,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="FriendsSettings"
        component={FriendsSettingsScreen}
        options={{
          title: "Friends Settings",
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default FriendsScreen;
