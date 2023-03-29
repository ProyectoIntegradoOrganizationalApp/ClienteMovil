import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const BoardScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Board Screen</Text>
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

export default BoardScreen;
