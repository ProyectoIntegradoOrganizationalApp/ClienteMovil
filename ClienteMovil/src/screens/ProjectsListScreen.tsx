// Componentes
import { FlatList, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";
import { FAB } from "react-native-paper";

// Estilos
import styles from "../styles/styles";

const projects = [
  {
    id: "1",
    title: "IntegratedProject",
    description:
      "Proyecto para crear una página para administrar tareas y projectos",
  },
  {
    id: "2",
    title: "proyectoDEePrueba",
  },
];

const ProjectsListScreen = () => {
  const { components, screens } = styles();

  return (
    <View style={[screens.projectsList.background, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={projects}
          renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
        />
        <FAB
          icon="plus"
          color="#ffffff"
          style={[components.fab, { position: "absolute" }]}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProjectsListScreen;
