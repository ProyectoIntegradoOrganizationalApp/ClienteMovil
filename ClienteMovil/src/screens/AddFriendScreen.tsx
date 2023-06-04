// React
import * as React from "react";

// Hooks
import { useUser } from "../hooks/useUser";

// Componentes
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const friends = [
  {
    id: "1",
    photo: "https://picsum.photos/163",
    name: "Pepe Pepín",
  },
  {
    id: "2",
    photo: "https://picsum.photos/490",
    name: "Juan Juanete",
  },
  {
    id: "3",
    photo: "https://picsum.photos/501",
    name: "Manolo Manolín",
  },
];

const Tab = createMaterialTopTabNavigator();

const AddFriendScreen = () => {
  const { colors } = styles();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.tabNavigator },
        tabBarLabelStyle: { color: colors.text },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        name="PendingRequest"
        options={{ title: "Pending" }}
        component={PendingRequestScreen}
      />
      <Tab.Screen
        name="Request"
        options={{ title: "Requests" }}
        component={RequestScreen}
      />
    </Tab.Navigator>
  );
};

const PendingRequestScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

  const { user } = useUser();

  const { colors, components, screens } = styles();

  return (
    <View style={[screens.addFriends.background, { flex: 1 }]}>
      <Searchbar
        placeholder="Search friends..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor={colors.text}
        cursorColor={colors.text}
        placeholderTextColor={colors.text}
        style={components.searchbar.searchbar}
        theme={{
          colors: { onSurfaceVariant: colors.text },
        }}
      />
      {
        // * When search: <FriendComponent type="request" {...request} />
      }
      <FlatList
        data={friends}
        renderItem={({ item: request }) => (
          <FriendComponent type="cancelRequest" {...request} />
        )}
      />
    </View>
  );
};

const RequestScreen = () => {
  const { user } = useUser();

  const { screens } = styles();

  return (
    <View style={[screens.addFriends.background, { flex: 1 }]}>
      <FlatList
        data={friends}
        renderItem={({ item: request }) => (
          <FriendComponent type="manageRequest" {...request} />
        )}
      />
    </View>
  );
};

export default AddFriendScreen;
