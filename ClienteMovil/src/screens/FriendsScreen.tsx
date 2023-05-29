// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Pantallas
import FriendsListScreen from "../screens/FriendsListScreen";
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
        name="Add Friend"
        component={AddFriendScreen}
        options={{
          headerTintColor: colors.text,
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
