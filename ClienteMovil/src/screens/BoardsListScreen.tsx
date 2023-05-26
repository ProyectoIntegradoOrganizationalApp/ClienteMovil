// Componentes
import { FlatList, View } from "react-native";
import { IconButton } from "react-native-paper";
import BoardComponent from "../components/BoardComponent";

// Estilos
import styles from "../styles/styles";

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
  const { components } = styles();
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
          style={components.icons.settingsIcon}
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

export default BoardsListScreen;
