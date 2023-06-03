// Hooks
import useProfile from "../hooks/useProfile";

// Pantallas
import EditProfileScreen from "./EditProfileScreen";
import AchievementsScreen from "../screens/AchievementsScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileProjectsScreen from "../screens/ProfileProjectsScreen";
import CreateProjectScreen from "./CreateProjectScreen";
import EditProjectScreen from "./EditProjectScreen";

// Componentes
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Avatar, Card, IconButton, Menu } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

// Estilos
import styles from "../styles/styles";

const ProfileDataScreen = ({ navigation }: { navigation: any }) => {
  const { profile } = useProfile();

  const { colors, components, screens } = styles();

  const profilePhoto =
    profile?.user !== undefined
      ? profile?.user.photo
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";

  return (
    <View style={[screens.profile.background, { flex: 1 }]}>
      <Card style={components.card}>
        <Card.Title
          title={profile?.user?.name}
          titleStyle={{ color: colors.text }}
          subtitle={profile?.user?.email}
          subtitleStyle={{ color: colors.text }}
          left={() => <Avatar.Image size={50} source={{ uri: profilePhoto }} />}
          right={() => (
            <IconButton
              icon="pencil"
              iconColor="#fff"
              size={15}
              style={[components.icons.pencilIcon, { marginRight: 15 }]}
              onPress={() => {
                navigation.navigate("EditProfile");
              }}
            />
          )}
        />
        <Card.Content style={screens.profile.cardContent}>
          <Menu.Item
            leadingIcon={({ size }) => {
              return <Icon name="trophy" size={size} color={colors.text} />;
            }}
            titleStyle={{ color: colors.text }}
            onPress={() => navigation.navigate("Achievements")}
            title="Achievements"
            style={screens.profile.menuItem}
          />
          <Menu.Item
            leadingIcon={({ size }) => {
              return <Icon name="chart-line" size={size} color={colors.text} />;
            }}
            titleStyle={{ color: colors.text }}
            onPress={() => navigation.navigate("Activity")}
            title="Activity"
            style={screens.profile.menuItem}
          />
          <Menu.Item
            leadingIcon={({ size }) => {
              return (
                <Icon name="view-dashboard" size={size} color={colors.text} />
              );
            }}
            titleStyle={{ color: colors.text }}
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
  const { colors } = styles();

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
              color={colors.primary}
              size={23}
              onPress={() => navigation.navigate("Settings")}
            />
          ),
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="Achievements"
        component={AchievementsScreen}
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="My Projects"
        component={ProfileProjectsScreen}
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="CreateProject"
        component={CreateProjectScreen}
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
      <Stack.Screen
        name="EditProject"
        component={EditProjectScreen}
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.tabNavigator,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
