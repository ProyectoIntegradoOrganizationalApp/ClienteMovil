import { Card, FAB, IconButton } from "react-native-paper";
import { FlatList, StyleSheet, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";
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

const ProfileProjectsScreen = () => {
  const handlePress = () => {
    PopupNotificationComponent(
      "success",
      "Project Created",
      "Project 'algo' was created"
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <View>
        <FlatList
          horizontal={false}
          scrollEnabled={true}
          data={projects}
          renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
        />
      </View>
      <FAB
        icon="plus"
        color="#ffffff"
        style={scriptStyles.fab}
        onPress={handlePress}
      />
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  cardIconActivity: {
    backgroundColor: "transparent",
  },
  fab: {
    position: "absolute",
    margin: 15,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    backgroundColor: styles.colors.grey800,
  },
});

export default ProfileProjectsScreen;
