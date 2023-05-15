import { FlatList, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";
import MemberComponent from "../components/MemberComponent";

const friends = [
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
          icon="cog"
          size={25}
          iconColor="grey"
          style={scriptStyles.settingsIcon}
        />
      </View>
      <FlatList
        data={friends}
        renderItem={({ item: member }) => <MemberComponent {...member} />}
      />
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  settingsIcon: {
    borderRadius: 5,
    backgroundColor: "transparent",
  },
});

export default ProjectsMembersScreen;
