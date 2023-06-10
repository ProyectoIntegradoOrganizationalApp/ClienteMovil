// Hooks
import { useAuth } from "../hooks/useAuth";

// Componentes
import { FlatList, View } from "react-native";
import { IconButton } from "react-native-paper";
import MemberComponent from "../components/MemberComponent";

// Estilos
import styles from "../styles/styles";

const ProjectsMembersScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { project } = route.params;
  const members = project.members;
  const { user } = useAuth();

  const { components, screens } = styles();

  return (
    <View style={[screens.projectsMembers.background, { flex: 1 }]}>
      <View style={screens.projectsMembers.container}>
        <IconButton
          icon="account-multiple-plus"
          size={20}
          iconColor="#fff"
          style={components.icons.addUserIcon}
          onPress={() =>
            navigation.navigate("InviteMember", {
              projectId: project.idProject,
            })
          }
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
              idProject={project.id}
            />
          )}
        />
      </View>
    </View>
  );
};

export default ProjectsMembersScreen;
