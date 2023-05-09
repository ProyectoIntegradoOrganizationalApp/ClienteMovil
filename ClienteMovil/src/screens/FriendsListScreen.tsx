import * as React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { Searchbar } from "react-native-paper";
import FriendComponent from "../components/FriendComponent";

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

const orders = ["All", "Online", "Pending", "Blocked"];

const FriendsListScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <View>
      <View style={scriptStyles.filterView}>
        <Text style={scriptStyles.filterText}>Order by:</Text>
        <Select
          value={orders[selectedIndex.row]}
          selectedIndex={selectedIndex}
          onSelect={(index: IndexPath | IndexPath[]) => setSelectedIndex(index)}
          style={scriptStyles.filterSelect}
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
        style={scriptStyles.searchbar}
      />
      <FlatList
        data={friends}
        renderItem={({ item: chat }) => (
          <FriendComponent type="chat" {...chat} />
        )}
      />
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  filterView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
  },
  filterText: {
    marginRight: 15,
  },
  filterSelect: {
    flex: 1,
  },
  searchbar: {
    borderRadius: 0,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default FriendsListScreen;
