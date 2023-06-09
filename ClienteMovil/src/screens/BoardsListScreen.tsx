// React
import { useEffect } from "react";

// Hook
import { useBoardsApi } from "../adapters/api/useBoardsApi";

// Componentes
import { FlatList, View } from "react-native";
import { FAB } from "react-native-paper";
import BoardComponent from "../components/BoardComponent";
import LoadingComponent from "../components/LoadingComponent";

// Estilos
import styles from "../styles/styles";

const BoardsListScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { data: boards, loading, fetchData } = useBoardsApi();

  const { app } = route.params;

  useEffect(() => {
    return navigation.addListener("focus", () => {
      fetchData(app.id);
    });
  }, [navigation]);

  const { components, screens } = styles();
  return (
    <View style={[screens.boardsList.background, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        {boards ? (
          <FlatList
            data={Array.isArray(boards) ? boards : [boards]}
            renderItem={({ item: board }) => <BoardComponent {...board} />}
            ListFooterComponent={<View style={{ height: 80 }} />}
          />
        ) : (
          <LoadingComponent state={loading} />
        )}
      </View>
      <FAB
        icon="plus"
        color="#ffffff"
        style={[components.fab, { position: "absolute" }]}
        onPress={() => {
          navigation.navigate("CreateBoard", { idapp: app.id });
        }}
      />
    </View>
  );
};

export default BoardsListScreen;
