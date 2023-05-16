import { FlatList, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";

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
      <FlatList
        data={projects}
        renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
      />
    </View>
  );
};

export default ProjectsListScreen;
