// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { View } from "react-native";

// Interfaces
import { Friend } from "../domain/friend/Friend.interface";

// Estilos
import styles from "../styles/styles";

interface IFriend extends Friend {
  type: string;
}

function FriendComponent(props: IFriend) {
  //const navigation = useNavigation<any>();

  const { components, colors } = styles();

  let componentOptions: JSX.Element;
  switch (props.type) {
    case "chat":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="message"
            color="#fff"
            size={30}
            style={components.icons.messageIcon}
          />
          <Avatar.Icon
            icon="delete"
            color="#fff"
            size={30}
            style={components.icons.deleteIcon}
          />
        </View>
      );
      break;
    case "add":
      componentOptions = (
        <Avatar.Icon
          icon="plus"
          color="#fff"
          size={30}
          style={components.icons.addIcon}
        />
      );
      break;
  }

  return (
    <Card style={components.card}>
      <Card.Title
        title={props.name}
        titleStyle={{ color: colors.text }}
        subtitleStyle={{ color: colors.text }}
        left={() => <Avatar.Image size={40} source={{ uri: props.photo }} />}
        right={() => componentOptions}
      />
    </Card>
  );
}

export default FriendComponent;
