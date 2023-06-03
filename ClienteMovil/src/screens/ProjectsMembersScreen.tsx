// Hooks
import { useAuth } from "../hooks/useAuth";

// Componentes
import { FlatList, View } from "react-native";
import { IconButton } from "react-native-paper";
import MemberComponent from "../components/MemberComponent";

// Estilos
import styles from "../styles/styles";

const ProjectsMembersScreen = ({ route }: { route: any }) => {
  const { project } = route.params;
  const members = project.members;
  const { user } = useAuth();

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
          data={members.sort(
            (a: any, b: any) => parseInt(a.idRole) - parseInt(b.idRole)
          )}
          renderItem={({ item: member }) => (
            <MemberComponent
              id={member.id}
              photo={member.photo}
              name={member.name}
              role={member.idRole}
              isUserAdmin={members.find(
                (member: any) => member.id === user?.id && member.idRole === "1"
              )}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ProjectsMembersScreen;
