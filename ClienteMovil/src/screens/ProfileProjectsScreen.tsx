import { Avatar, Card, FAB } from "react-native-paper";
import { FlatList, StyleSheet, View } from "react-native";
import ProjectComponent from "../components/ProjectComponent";
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
  return (
    <View style={{ height: "100%" }}>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Your Projects"
          titleStyle={{ textAlign: "center" }}
          left={() => (
            <Avatar.Icon
              icon="help-circle"
              size={35}
              color="grey"
              style={scriptStyles.cardIconActivity}
            />
          )}
          right={() => (
            <Avatar.Icon
              icon="cog"
              size={35}
              color="grey"
              style={[scriptStyles.cardIconActivity, { marginRight: 15 }]}
            />
          )}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: "#ffffff",
          }}
        />
        <Card.Content>
          <View>
            <FlatList
              horizontal={false}
              scrollEnabled={true}
              data={projects}
              renderItem={({ item: pro }) => <ProjectComponent {...pro} />}
            />
          </View>
        </Card.Content>
      </Card>
      <FAB
        icon="plus"
        color="#ffffff"
        style={scriptStyles.fab}
        onPress={() => {}}
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
