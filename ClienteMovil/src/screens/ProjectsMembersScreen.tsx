import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MemberComponent from "../components/MemberComponent";

const friends = [
  {
    id: "1",
    profile: "https://picsum.photos/163",
    user: "Pepe Pepín",
    status: "Deja de leer mi estado",
    role: "Admin",
  },
  {
    id: "2",
    profile: "https://picsum.photos/490",
    user: "Juan Juanete",
    status: "Vive sin límites",
    role: "Partner",
  },
  {
    id: "3",
    profile: "https://picsum.photos/501",
    user: "Manolo Manolín",
    status: "El interior es lo que cuesta",
    role: "Editor",
  },
];

const ProjectsMembersScreen = () => {
  return (
    <View>
      <FlatList
        data={friends}
        renderItem={({ item: member }) => <MemberComponent {...member} />}
      />
    </View>
  );
};

const scriptStyles = StyleSheet.create({});

export default ProjectsMembersScreen;
