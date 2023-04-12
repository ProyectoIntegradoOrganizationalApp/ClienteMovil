import { StyleSheet, View } from "react-native";
import { Avatar, Card, List } from "react-native-paper";
import theme from "../utils/theme";

const ProfileScreen = () => {
  return (
    <View>
      <Card style={styles.profile}>
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
            <List.Icon icon="account-supervisor" color={theme.colors.grey600} />
          )}
          onPress={() => console.log("hi")}
          style={styles.listItem}
        />
        <List.Item
          title="Projects"
          left={() => (
            <List.Icon icon="view-dashboard" color={theme.colors.grey600} />
          )}
          onPress={() => console.log("bye")}
          style={styles.listItem}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    borderRadius: 0,
  },
  listItem: {
    padding: 25,
  },
});

export default ProfileScreen;
