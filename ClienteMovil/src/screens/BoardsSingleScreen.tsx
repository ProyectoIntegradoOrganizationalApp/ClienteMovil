// Componentes
import { FlatList, View } from "react-native";
import { FAB } from "react-native-paper";
import ColumnComponent from "../components/ColumnComponent";

// Estilos
import styles from "../styles/styles";

const columns = [
  {
    id: "1",
    idboard: "1",
    title: "Columna 1",
  },
  {
    id: "2",
    idboard: "2",
    title: "Columna 2",
  },
  {
    id: "3",
    idboard: "3",
    title: "Columna 3",
  },
];

const BoardsSingleScreen = ({ navigation }: { navigation: any }) => {
  const { components, screens } = styles();

  return (
    <View style={[screens.boardsList.background, { flex: 1 }]}>
      <View style={{ flex: 0 }}>
        <FlatList
          horizontal
          data={columns}
          renderItem={({ item: column }) => <ColumnComponent {...column} />}
        />
      </View>
      <FAB
        icon="plus"
        color="#ffffff"
        style={[components.fab, { position: "absolute", marginTop: 80 }]}
        onPress={() => {
          navigation.navigate("CreateColumn");
        }}
      />
    </View>
  );
};

export default BoardsSingleScreen;
