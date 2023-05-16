import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

// TODO: Code file

const ProjectsSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Projects Settings Screen</Text>
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

export default ProjectsSettingsScreen;
