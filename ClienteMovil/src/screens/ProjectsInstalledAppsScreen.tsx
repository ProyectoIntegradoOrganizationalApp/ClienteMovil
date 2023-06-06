// Componentes
import { FlatList, View } from "react-native";
import { IconButton } from "react-native-paper";
import AppComponent from "../components/AppComponent";

// Estilos
import styles from "../styles/styles";

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
  const { components, screens } = styles();

  return (
    <View style={[screens.projectsInstalledApps.background, { flex: 1 }]}>
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
          style={[components.icons.basketIcon, { marginRight: 15 }]}
          onPress={() => navigation.navigate("ProjectsApps")}
        />
      </View>
      <View style={{ flex: 1, marginBottom: 15 }}>
        <FlatList
          data={apps}
          renderItem={({ item: app }) => <AppComponent {...app} />}
        />
      </View>
    </View>
  );
};

export default ProjectsInstalledAppsScreen;
