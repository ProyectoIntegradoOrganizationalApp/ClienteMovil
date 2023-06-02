// Hooks
import useProfile from "../hooks/useProfile";

// Pantallas
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileProjectsScreen from "../screens/ProfileProjectsScreen";

// Componentes
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import { Avatar, Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Estilos
import styles from "../styles/styles";

const Tab = createMaterialTopTabNavigator();

const FriendProfileScreen = () => {
  const { profile } = useProfile(); // TODO: Get friend profile

  const { colors, components, screens } = styles();

  return (
    <>
      <View style={{ backgroundColor: colors.tabNavigator, flex: 1 }}>
        <View style={{ marginBottom: 15 }}>
          <Card
            mode="contained"
            style={[components.card, { backgroundColor: colors.tabNavigator }]}
          >
            <Card.Title
              title={profile?.user?.name}
              titleStyle={{ color: colors.text }}
              subtitle={profile?.user?.email}
              subtitleStyle={{ color: colors.text }}
              left={() => (
                <Avatar.Image
                  size={50}
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
                  }}
                />
              )}
            />
          </Card>
        </View>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: colors.tabNavigator },
            tabBarLabelStyle: { color: colors.text },
            tabBarIndicatorStyle: { backgroundColor: colors.primary },
          }}
        >
          <Tab.Screen
            name="Achievements"
            component={AchievementsScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <Icon name="trophy" size={20} color={colors.text} />
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={ActivityScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <Icon name="chart-line" size={20} color={colors.text} />
              ),
            }}
          />
          <Tab.Screen
            name="Projects"
            component={ProfileProjectsScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <Icon name="view-dashboard" size={20} color={colors.text} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </>
  );
};

export default FriendProfileScreen;
