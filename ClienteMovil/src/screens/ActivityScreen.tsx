import React from "react";
import { Avatar, Card } from "react-native-paper";
import { ScrollView, StyleSheet, Text } from "react-native";
import { Calendar } from "@ui-kitten/components";
import styles from "../styles/styles";

const ActivityScreen = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <ScrollView>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasks this Week"
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
      <Card style={[scriptStyles.card, { marginBottom: 15 }]}>
        <Card.Title
          title="April - 2023"
          titleStyle={{ textAlign: "center" }}
          style={{ borderBottomWidth: 2, borderBottomColor: "#ffffff" }}
        />
        <Card.Content>
          <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} />
        </Card.Content>
      </Card>
    </ScrollView>
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
