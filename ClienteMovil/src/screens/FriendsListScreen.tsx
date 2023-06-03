// React
import * as React from "react";

// Hooks
import { useUser } from "../hooks/useUser";

// Componentes
import {
  ApplicationProvider,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";
import { IconButton, Searchbar } from "react-native-paper";
import { FlatList, Text, View } from "react-native";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const orders = ["All", "Online", "Pending", "Blocked"];

const friends = [
  {
    id: "1",
    profile: "https://picsum.photos/163",
    user: "Pepe Pepín",
    status: "Deja de leer mi estado",
  },
  {
    id: "2",
    profile: "https://picsum.photos/490",
    user: "Juan Juanete",
    status: "Vive sin límites",
  },
  {
    id: "3",
    profile: "https://picsum.photos/501",
    user: "Manolo Manolín",
    status: "El interior es lo que cuesta",
  },
];

const FriendsListScreen = ({ navigation }: { navigation: any }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0)
  );

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

  const { user } = useUser();

  const { colors, components, screens } = styles();

  return (
    <>
      <View style={[screens.friendsList.background, { flex: 1 }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="account-multiple-plus"
            size={20}
            iconColor="#fff"
            style={components.icons.basketIcon}
            onPress={() => navigation.navigate("AddFriend")}
          />
        </View>
        <View style={components.filter.filterView}>
          <Text style={components.filter.filterText}>Order by:</Text>
          <ApplicationProvider
            mapping={mapping}
            theme={components.filter.filterSelectTheme}
          >
            <Select
              value={orders[selectedIndex.row]}
              selectedIndex={selectedIndex}
              onSelect={(index: any) => setSelectedIndex(index)}
              style={components.filter.filterSelect}
            >
              {orders.map(
                (title: string, index: number): React.ReactElement => (
                  <SelectItem key={index.toString()} title={title} />
                )
              )}
            </Select>
          </ApplicationProvider>
        </View>
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
        <View style={{ flex: 1 }}>
          <FlatList
            data={friends}
            renderItem={({ item: chat }) => (
              <FriendComponent type="chat" {...chat} />
            )}
          />
        </View>
      </View>
    </>
  );
};

export default FriendsListScreen;
