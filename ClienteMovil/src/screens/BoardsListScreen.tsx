import { FlatList, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import BoardComponent from "../components/BoardComponent";

const boards = [
  {
    id: "1",
    title: "Tablero 1",
    cover: "https://picsum.photos/600",
  },
  {
    id: "2",
    title: "Tablero 2",
    cover: "https://picsum.photos/700",
  },
  {
    id: "3",
    title: "Tablero 3",
    cover: "https://picsum.photos/800",
  },
];

const BoardsListScreen = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="cog"
          size={25}
          iconColor="grey"
          style={scriptStyles.settingsIcon}
        />
      </View>
      <View style={{ height: "90%" }}>
        <FlatList
          data={boards}
          renderItem={({ item: board }) => <BoardComponent {...board} />}
        />
      </View>
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  settingsIcon: {
    borderRadius: 5,
    backgroundColor: "transparent",
  },
});

export default BoardsListScreen;
