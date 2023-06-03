// Hook
import { useProjectsApi } from "../adapters/api/useProjectsApi";

// Componentes
import { FlatList, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";
import { FAB } from "react-native-paper";
import LoadingComponent from "../components/LoadingComponent";

// Estilos
import styles from "../styles/styles";

const ProfileProjectsScreen = ({ navigation }: { navigation: any }) => {
  const { data: projects, loading } = useProjectsApi(true);

  const { components, screens } = styles();

  return (
    <View style={[screens.projectsList.background, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        {projects ? (
          <FlatList
            data={Array.isArray(projects) ? projects : [projects]}
            renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
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
          navigation.navigate("CreateProject");
        }}
      />
    </View>
  );
};

export default ProfileProjectsScreen;
