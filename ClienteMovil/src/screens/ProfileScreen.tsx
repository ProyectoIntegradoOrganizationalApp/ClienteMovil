import { StyleSheet, View } from "react-native";
import { Avatar, Card, List } from "react-native-paper";
import styles from "../styles/styles";

const ProfileScreen = () => {
  return (
    <View>
      <Card style={styleScript.profileCard}>
        <Card.Title
          title={"Pepe Pepin"}
          left={() => (
            <Avatar.Image
              size={40}
              source={{ uri: "https://picsum.photos/331" }}
            />
          )}
        />
      </Card>
      <List.Section>
        <List.Item
          title="Friends"
          left={() => (
            <List.Icon
              icon="account-supervisor"
              color={styles.colors.grey600}
            />
          )}
          onPress={() => console.log("hi")}
          style={styleScript.listItem}
        />
        <List.Item
          title="Projects"
          left={() => (
            <List.Icon icon="view-dashboard" color={styles.colors.grey600} />
          )}
          onPress={() => console.log("bye")}
          style={styleScript.listItem}
        />
      </List.Section>
    </View>
  );
};

const styleScript = StyleSheet.create({
  profileCard: {
    borderRadius: 0,
  },
  listItem: {
    padding: 25,
  },
});

export default ProfileScreen;
