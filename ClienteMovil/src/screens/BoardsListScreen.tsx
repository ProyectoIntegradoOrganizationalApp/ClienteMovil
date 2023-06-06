// Componentes
import { FlatList, View } from "react-native";
import { FAB } from "react-native-paper";
import BoardComponent from "../components/BoardComponent";

// Estilos
import styles from "../styles/styles";

const boards = [
  {
    id: "1",
    title: "Tablero 1",
    cover: "https://picsum.photos/600",
    owner: true,
  },
  {
    id: "2",
    title: "Tablero 2",
    cover: "https://picsum.photos/700",
    owner: false,
  },
  {
    id: "3",
    title: "Tablero 3",
    cover: "https://picsum.photos/800",
    owner: true,
  },
];

const BoardsListScreen = ({ navigation }: { navigation: any }) => {
  const { components, screens } = styles();
  return (
    <View style={[screens.boardsList.background, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={boards}
          renderItem={({ item: board }) => <BoardComponent {...board} />}
          ListFooterComponent={<View style={{ height: 80 }} />}
        />
      </View>
      <FAB
        icon="plus"
        color="#ffffff"
        style={[components.fab, { position: "absolute" }]}
        onPress={() => {
          navigation.navigate("CreateBoard");
        }}
      />
    </View>
  );
};

export default BoardsListScreen;
