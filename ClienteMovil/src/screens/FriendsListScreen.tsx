import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
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

const FriendsListScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

  return (
    <View>
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
  searchbar: {
    borderRadius: 0,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default FriendsListScreen;
