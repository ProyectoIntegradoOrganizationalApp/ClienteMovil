// Hooks
import { useAuth } from "../hooks/useAuth";
import { useFriendApi } from "../adapters/api/useFriendApi";

// Componentes
import { useNavigation, useRoute } from "@react-navigation/native";
import { Avatar, Card, IconButton, TouchableRipple } from "react-native-paper";
import { View } from "react-native";

// Interfaces
import { Friend } from "../domain/friend/Friend.interface";

// Estilos
import styles from "../styles/styles";

interface IFriend extends Friend {
  type: string;
}

function FriendComponent(props: IFriend) {
  const navigation = useNavigation<any>();

  const { user } = useAuth();

  const { projectId } = useRoute<any>();

  const {
    addFriend,
    removeFriend,
    acceptFriendRequest,
    denyFriendRequest,
    inviteUser,
    acceptInvitation,
    denyInvitation,
  } = useFriendApi(true);

  const { components, colors } = styles();

  let componentOptions: JSX.Element;
  switch (props.type) {
    case "chat":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="message"
            iconColor="#fff"
            size={15}
            style={components.icons.messageIcon}
            onPress={() => {
              navigation.navigate("ChatScreen", {
                friendName: props.name,
              });
            }}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={15}
            style={components.icons.deleteIcon}
            onPress={() => {
              removeFriend(props.id);
            }}
          />
        </View>
      );
      break;
    case "manageRequest":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="plus"
            iconColor="#fff"
            size={15}
            style={components.icons.addIcon}
            onPress={() => {
              acceptFriendRequest(user?.id);
            }}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={15}
            style={components.icons.deleteIcon}
            onPress={() => {
              denyFriendRequest(user?.id);
            }}
          />
        </View>
      );
      break;
    case "request":
      componentOptions = (
        <IconButton
          icon="send"
          iconColor="#fff"
          size={15}
          style={components.icons.requestIcon}
          onPress={() => {
            addFriend(props.id);
          }}
        />
      );
      break;
    case "invite":
      componentOptions = (
        <IconButton
          icon="send"
          iconColor="#fff"
          size={15}
          style={components.icons.requestIcon}
          onPress={() => {
            inviteUser(user?.id, projectId);
          }}
        />
      );
      break;
    case "manageProjectRequest":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="plus"
            iconColor="#fff"
            size={15}
            style={components.icons.addIcon}
            onPress={() => {
              acceptInvitation(user?.id, projectId);
            }}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={15}
            style={components.icons.deleteIcon}
            onPress={() => {
              denyInvitation(user?.id, projectId);
            }}
          />
        </View>
      );
      break;
  }

  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate("FriendProfile", {
          friendName: props.name,
          friendId: props.id,
        });
      }}
    >
      <Card style={components.card}>
        <Card.Title
          title={props.name}
          titleStyle={{ color: colors.text }}
          subtitleStyle={{ color: colors.text }}
          left={() => <Avatar.Image size={40} source={{ uri: props.photo }} />}
          right={() => componentOptions}
        />
      </Card>
    </TouchableRipple>
  );
}

export default FriendComponent;
