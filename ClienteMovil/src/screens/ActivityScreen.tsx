import { Avatar, Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";
import ProfileNavigationComponent from "../components/ProfileNavigationComponent";

const ActivityScreen = () => {
  return (
    <View>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasks this Week"
          left={() => (
            <Avatar.Icon icon="xml" size={45} style={scriptStyles.cardIcon} />
          )}
          right={() => <Text style={{ marginRight: 20 }}>15</Text>}
        />
      </Card>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasks this Day"
          left={() => (
            <Avatar.Icon icon="xml" size={45} style={scriptStyles.cardIcon} />
          )}
          right={() => <Text style={{ marginRight: 20 }}>2</Text>}
        />
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
  cardIcon: {
    backgroundColor: "white",
  },
});

export default ActivityScreen;
