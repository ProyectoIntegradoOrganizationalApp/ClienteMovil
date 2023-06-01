// Componentes
import { FAB } from "react-native-paper";
import { FlatList, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const projects = [
  {
    id: "1",
    name: "IntegratedProject",
    description:
      "Proyecto para crear una página para administrar tareas y projectos",
  },
  {
    id: "2",
    name: "proyectoDEePrueba",
  },
];

const ProfileProjectsScreen = () => {
  const { components, screens } = styles();

  const handlePress = () => {
    PopupNotificationComponent(
      "success",
      "Project Created",
      "Project 'algo' was created"
    );
  };

  return (
    <View style={[screens.projectsList.background, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={projects}
          renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
        />
      </View>
      <FAB
        icon="plus"
        color="#ffffff"
        style={[components.fab, { position: "absolute" }]}
        onPress={handlePress}
      />
    </View>
  );
};

export default ProfileProjectsScreen;
