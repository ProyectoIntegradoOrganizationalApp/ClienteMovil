import { FlatList, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import AppComponent from "../components/AppComponent";

const apps = [
  {
    id: "1",
    icon: "https://picsum.photos/268",
    name: "Taskman",
    description: "Work Managment",
    installed: true,
    added: true,
    premium: false,
  },
];

const ProjectsInstalledAppsScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="basket"
          size={20}
          iconColor="#fff"
          style={scriptStyles.basketIcon}
          onPress={() => navigation.navigate("ProjectsApps")}
        />
        <IconButton
          icon="cog"
          size={25}
          iconColor="grey"
          style={scriptStyles.settingsIcon}
        />
      </View>
      <FlatList
        data={apps}
        renderItem={({ item: app }) => <AppComponent {...app} />}
      />
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  basketIcon: {
    borderRadius: 5,
    backgroundColor: "#3c6db2",
  },
  settingsIcon: {
    borderRadius: 5,
    backgroundColor: "transparent",
  },
});

export default ProjectsInstalledAppsScreen;
