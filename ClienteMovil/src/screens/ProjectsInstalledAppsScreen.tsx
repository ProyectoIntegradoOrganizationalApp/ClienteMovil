import { View, StyleSheet } from "react-native";
import { IconButton, Text } from "react-native-paper";

// TODO: Code file

const ProjectsInstalledAppsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={scriptStyles.container}>
      <Text variant="headlineMedium">Projects Installed Apps Screen</Text>
      <IconButton
        icon="basket"
        size={30}
        iconColor="#fff"
        style={scriptStyles.basketIcon}
        onPress={() => navigation.navigate("ProjectsApps")}
      />
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  basketIcon: {
    backgroundColor: "#008f39",
  },
});

export default ProjectsInstalledAppsScreen;
