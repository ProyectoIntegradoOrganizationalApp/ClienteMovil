import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const FriendsSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Friends Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FriendsSettingsScreen;
