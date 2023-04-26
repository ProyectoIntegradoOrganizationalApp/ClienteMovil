import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet } from "react-native";
import styles from "../styles/styles";

interface IProject {
  title: string;
  description?: string;
}

function ProfileProjectComponent(props: IProject) {
  return (
    <Card style={scriptStyles.project}>
      <Card.Title
        title={props.title}
        subtitle={props.description}
        right={() => (
          <Avatar.Icon
            icon="dots-vertical"
            size={45}
            color="grey"
            style={scriptStyles.projectIcon}
          />
        )}
      />
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  project: {
    borderRadius: 5,
    marginTop: 15,
  },
  projectIcon: {
    backgroundColor: "transparent",
  },
});

export default ProfileProjectComponent;
