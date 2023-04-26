import { Avatar, Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";

const ActivityScreen = () => {
  return (
    <View>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasksthis Week"
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={scriptStyles.cardIconTask}
            />
          )}
          right={() => (
            <Text style={{ marginRight: 20, fontSize: 32, fontWeight: "800" }}>
              15
            </Text>
          )}
        />
      </Card>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasks this Day"
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={scriptStyles.cardIconTask}
            />
          )}
          right={() => (
            <Text style={{ marginRight: 20, fontSize: 32, fontWeight: "800" }}>
              2
            </Text>
          )}
        />
      </Card>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Daily Activity"
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
          style={{ borderBottomWidth: 2, borderBottomColor: "#ffffff" }}
        />
        <Card.Content>
          <View style={{ padding: 10 }}>
            <Text>Graficas</Text>
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
  cardIconTask: {
    backgroundColor: "white",
  },
  cardIconActivity: {
    backgroundColor: "transparent",
  },
});

export default ActivityScreen;
