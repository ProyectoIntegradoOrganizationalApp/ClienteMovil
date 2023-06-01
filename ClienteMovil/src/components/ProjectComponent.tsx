// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { View } from "react-native";

// Estilos
import styles from "../styles/styles";

interface IProject {
  name: string;
  description?: string;
}

function ProjectComponent(props: IProject) {
  const navigation = useNavigation<any>();

  const { colors, components } = styles();

  return (
    <Card
      onPress={() =>
        navigation.navigate("ProjectsSingle", {
          projectTitle: props.name,
        })
      }
      style={components.card}
    >
      <Card.Title
        title={props.name}
        titleStyle={{ color: colors.text }}
        subtitle={props.description}
        subtitleStyle={{ color: colors.text }}
        right={() => (
          <View style={{ flexDirection: "row" }}>
            <Avatar.Icon
              icon="eye"
              color="#fff"
              size={30}
              style={components.icons.eyeIcon}
            />
            <Avatar.Icon
              icon="pencil"
              color="#fff"
              size={30}
              style={components.icons.pencilIcon}
            />
            <Avatar.Icon
              icon="delete"
              color="#fff"
              size={30}
              style={components.icons.deleteIcon}
            />
          </View>
        )}
      />
    </Card>
  );
}

export default ProjectComponent;
