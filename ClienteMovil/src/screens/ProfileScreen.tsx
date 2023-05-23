import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileProjectsScreen from "../screens/ProfileProjectsScreen";
import { useContext } from "react";
import { AuthContext } from "../domain/context/AuthContext";
import { Avatar, Card, Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View } from "react-native";

const ProfileDataScreen = ({ navigation }: { navigation: any }) => {
  const { user } = useContext(AuthContext);
  return (
    <View>
      <Card style={scriptStyles.profileData}>
        <Card.Title
          title={user?.name + " " + user?.lastname}
          subtitle={user?.email}
          left={() => (
            <Avatar.Image
              size={50}
              source={{ uri: "https://picsum.photos/777" }}
            />
          )}
        />
        <Card.Content style={{ marginTop: 10 }}>
          <View>
            <Menu.Item
              leadingIcon="trophy"
              onPress={() => navigation.navigate("Achievements")}
              title="Achievements"
            />
            <Menu.Item
              leadingIcon="chart-line"
              onPress={() => navigation.navigate("Activity")}
              title="Activity"
            />
            <Menu.Item
              leadingIcon="view-dashboard"
              onPress={() => navigation.navigate("My Projects")}
              title="My Projects"
            />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Data"
        component={ProfileDataScreen}
        options={{
          title: "Profile",
          headerRight: () => (
            <Icon
              name="cog"
              size={23}
              onPress={() => navigation.navigate("Settings")}
            />
          ),
        }}
      />
      <Stack.Screen name="Achievements" component={AchievementsScreen} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="My Projects" component={ProfileProjectsScreen} />
    </Stack.Navigator>
  );
};

const scriptStyles = StyleSheet.create({
  profileData: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default ProfileScreen;
