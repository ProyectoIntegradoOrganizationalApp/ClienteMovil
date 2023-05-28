// React
import { useContext } from "react";

// Contexto
import { AuthContext } from "../domain/context/AuthContext";

// Pantallas
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileProjectsScreen from "../screens/ProfileProjectsScreen";

// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Avatar, Card, Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

// Estilos
import styles from "../styles/styles";

const ProfileDataScreen = ({ navigation }: { navigation: any }) => {
  const { user } = useContext(AuthContext);

  const { colors, components, screens } = styles();

  return (
    <View>
      <Card style={components.card}>
        <Card.Title
          title={user?.name + " " + user?.lastname}
          titleStyle={{ color: colors.text }}
          subtitle={user?.email}
          subtitleStyle={{ color: colors.text }}
          left={() => (
            <Avatar.Image
              size={50}
              source={{ uri: "https://picsum.photos/777" }}
            />
          )}
        />
        <Card.Content style={screens.profile.cardContent}>
          <Menu.Item
            leadingIcon="trophy"
            onPress={() => navigation.navigate("Achievements")}
            title="Achievements"
            style={screens.profile.menuItem}
          />
          <Menu.Item
            leadingIcon="chart-line"
            onPress={() => navigation.navigate("Activity")}
            title="Activity"
            style={screens.profile.menuItem}
          />
          <Menu.Item
            leadingIcon="view-dashboard"
            onPress={() => navigation.navigate("My Projects")}
            title="My Projects"
            style={screens.profile.menuItem}
          />
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

export default ProfileScreen;
