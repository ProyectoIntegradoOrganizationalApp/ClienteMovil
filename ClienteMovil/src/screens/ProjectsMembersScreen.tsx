// Componentes
import { FlatList, View } from "react-native";
import { IconButton } from "react-native-paper";
import MemberComponent from "../components/MemberComponent";

// Estilos
import styles from "../styles/styles";

const members = [
  {
    id: "1",
    profile: "https://picsum.photos/163",
    user: "Pepe Pepín",
    status: "Deja de leer mi estado",
    role: 0,
  },
  {
    id: "2",
    profile: "https://picsum.photos/490",
    user: "Juan Juanete",
    status: "Vive sin límites",
    role: 3,
  },
  {
    id: "3",
    profile: "https://picsum.photos/501",
    user: "Manolo Manolín",
    status: "El interior es lo que cuesta",
    role: 1,
  },
];

const ProjectsMembersScreen = () => {
  const { colors, components, screens } = styles();

  return (
    <View style={[screens.projectsMembers.background, { flex: 1 }]}>
      <View style={screens.projectsMembers.container}>
        <IconButton
          icon="cog"
          size={25}
          iconColor={colors.primary}
          style={components.icons.settingsIcon}
        />
      </View>
      <View style={{ flex: 1, marginBottom: 15 }}>
        <FlatList
          data={members}
          renderItem={({ item: member }) => <MemberComponent {...member} />}
        />
      </View>
    </View>
  );
};

export default ProjectsMembersScreen;
