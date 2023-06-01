// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton } from "react-native-paper";
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

  let requestIcon = "send";
  let requestIconStyle = components.icons.requestIcon;
  const sendRequest = () => {
    requestIcon = requestIcon === "send" ? "cancel" : "send";
    requestIconStyle =
      requestIconStyle === components.icons.requestIcon
        ? components.icons.cancelRequestIcon
        : components.icons.requestIcon;
  };

  let componentOptions: JSX.Element;
  switch (props.type) {
    case "chat":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="message"
            iconColor="#fff"
            size={20}
            style={components.icons.messageIcon}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={20}
            style={components.icons.deleteIcon}
          />
        </View>
      );
      break;
    case "add":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="plus"
            iconColor="#fff"
            size={20}
            style={components.icons.addIcon}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={20}
            style={components.icons.deleteIcon}
          />
        </View>
      );
      break;
    case "request":
      componentOptions = (
        <IconButton
          icon={requestIcon}
          iconColor="#fff"
          size={20}
          style={requestIconStyle}
          onPress={sendRequest}
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
