// React
import * as React from "react";
import { FlatList, Text, View } from "react-native";

// Componentes
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { IconButton, Searchbar } from "react-native-paper";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const friends = [
  {
    id: "1",
    profile: "https://picsum.photos/163",
    user: "Pepe Pepino",
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

const orders = ["All", "Online", "Pending", "Blocked"];

const FriendsListScreen = ({ navigation }: { navigation: any }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0)
  );

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

  const { components } = styles();

  return (
    <>
      <View style={{ marginTop: 15 }}>
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
            onPress={() => navigation.navigate("Add Friend")}
          />
        </View>
        <View style={components.filter.filterView}>
          <Text style={components.filter.filterText}>Order by:</Text>
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
        </View>
        <Searchbar
          placeholder="Search friends..."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={components.searchbar.searchbar}
        />
        <FlatList
          data={friends}
          renderItem={({ item: chat }) => (
            <FriendComponent type="chat" {...chat} />
          )}
        />
      </View>
    </>
  );
};

export default FriendsListScreen;
