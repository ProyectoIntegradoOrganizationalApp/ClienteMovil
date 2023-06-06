// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import FriendsListScreen from "../screens/FriendsListScreen";
import FriendProfileScreen from "./FriendProfileScreen";
import ChatScreen from "./ChatScreen";
import AddFriendScreen from "../screens/AddFriendScreen";

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
    </Stack.Navigator>
  );
};

export default FriendsScreen;
