import { FlatList, StyleSheet, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";
import { FAB } from "react-native-paper";
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
  return (
    <View>
      <View style={{ height: "100%" }}>
        <FlatList
          data={projects}
          renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
        />
        <FAB
          icon="plus"
          color="#ffffff"
          style={scriptStyles.fab}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    backgroundColor: styles.colors.grey800,
  },
});

export default ProjectsListScreen;
