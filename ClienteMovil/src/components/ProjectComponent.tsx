import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet, View } from "react-native";

interface IProject {
  title: string;
  description?: string;
}

function ProjectComponent(props: IProject) {
  const navigation = useNavigation<any>();
  return (
    <Card
      onPress={() =>
        navigation.navigate("ProjectsSingle", {
          projectTitle: props.title,
        })
      }
      style={scriptStyles.project}
    >
      <Card.Title
        title={props.title}
        subtitle={props.description}
        right={() => (
          <View style={{ flexDirection: "row" }}>
            <Avatar.Icon
              icon="eye"
              color="#fff"
              size={30}
              style={scriptStyles.eyeIcon}
            />
            <Avatar.Icon
              icon="pencil"
              color="#fff"
              size={30}
              style={scriptStyles.pencilIcon}
            />
            <Avatar.Icon
              icon="delete"
              color="#fff"
              size={30}
              style={scriptStyles.deleteIcon}
            />
          </View>
        )}
      />
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  project: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  eyeIcon: {
    borderRadius: 5,
    backgroundColor: "#334155",
  },
  pencilIcon: {
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: "#3c6db2",
  },
  deleteIcon: {
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#d54f4f",
  },
});

export default ProjectComponent;