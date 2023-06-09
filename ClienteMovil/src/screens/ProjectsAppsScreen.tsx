// React
import { useEffect } from "react";

// Hook
import { useAppsApi } from "../adapters/api/useAppsApi";

// Componentes
import { FlatList, View } from "react-native";
import { FAB } from "react-native-paper";
import AppComponent from "../components/AppComponent";
import LoadingComponent from "../components/LoadingComponent";

// Estilos
import styles from "../styles/styles";

const ProjectsAppsScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { data: apps, loading, fetchData } = useAppsApi();

  const { project } = route.params;

  useEffect(() => {
    return navigation.addListener("focus", () => {
      fetchData(project.idproject);
    });
  }, [navigation]);

  const { components, screens } = styles();

  return (
    <View style={[screens.projectsInstalledApps.background, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        {apps ? (
          <FlatList
            data={Array.isArray(apps) ? apps : [apps]}
            renderItem={({ item: app }) => <AppComponent {...app} />}
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
          navigation.navigate("CreateApp", { idproject: project.id });
        }}
      />
    </View>
  );
};

export default ProjectsAppsScreen;
