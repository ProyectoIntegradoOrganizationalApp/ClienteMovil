// React
import { useEffect } from "react";

// Hook
import { useColumnsApi } from "../adapters/api/useColumnsApi";

// Componentes
import { FlatList, View } from "react-native";
import { FAB } from "react-native-paper";
import ColumnComponent from "../components/ColumnComponent";
import LoadingComponent from "../components/LoadingComponent";

// Estilos
import styles from "../styles/styles";

const BoardsSingleScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { data: columns, loading, fetchData } = useColumnsApi();

  const { board } = route.params;

  useEffect(() => {
    return navigation.addListener("focus", () => {
      fetchData(board.idApp);
    });
  }, [navigation]);

  const { components, screens } = styles();

  return (
    <View style={[screens.boardsList.background, { flex: 1 }]}>
      <View style={{ flex: 0 }}>
        {columns ? (
          <FlatList
            horizontal
            data={Array.isArray(columns) ? columns : [columns]}
            renderItem={({ item: column }) => <ColumnComponent {...column} />}
          />
        ) : (
          <LoadingComponent state={loading} />
        )}
      </View>
      <FAB
        icon="plus"
        color="#ffffff"
        style={[components.fab, { position: "absolute", marginTop: 80 }]}
        onPress={() => {
          navigation.navigate("CreateColumn", { idapp: board.idApp });
        }}
      />
    </View>
  );
};

export default BoardsSingleScreen;
