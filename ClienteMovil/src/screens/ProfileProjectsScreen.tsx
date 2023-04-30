import { Avatar, Card } from "react-native-paper";
import { FlatList, StyleSheet, View } from "react-native";
//import ProfileProjectComponent from "../components/ProfileProjectComponent";
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
    <View>
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
});

export default ProfileProjectsScreen;
