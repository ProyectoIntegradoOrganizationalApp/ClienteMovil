// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Pantallas
import FriendsListScreen from "../screens/FriendsListScreen";
import AddFriendScreen from "../screens/AddFriendScreen";
import FriendsSettingsScreen from "../screens/FriendsSettingsScreen";

const Stack = createNativeStackNavigator();

const FriendsScreen = ({ navigation }: { navigation: any }) => {
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
              size={23}
              onPress={() => navigation.navigate("FriendsSettings")}
            />
          ),
        }}
      />
      <Stack.Screen name="Add Friend" component={AddFriendScreen} />
      <Stack.Screen
        name="FriendsSettings"
        component={FriendsSettingsScreen}
        options={{ title: "Friends Settings" }}
      />
    </Stack.Navigator>
  );
};

export default FriendsScreen;
