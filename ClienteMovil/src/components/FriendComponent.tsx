// React
import { useEffect } from "react";

// Hooks
import { useFriendApi } from "../adapters/api/useFriendApi";

// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import PopupNotificationComponent from "./PopupNotificationComponent";

// Interfaces
import { Friend } from "../domain/friend/Friend.interface";

// Estilos
import styles from "../styles/styles";

interface IFriend extends Friend {
  type: string;
}

function FriendComponent(props: IFriend) {
  const navigation = useNavigation<any>();

  const { data, error, addUser, removeUser } = useFriendApi();

  useEffect(() => {
    if (!error) {
      PopupNotificationComponent("success", "Success", data?.message);
    }

    if (error) {
      PopupNotificationComponent("error", "Error", data?.message);
    }
  }, [error?.error]);

  const { components, colors } = styles();

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
            onPress={() => {
              navigation.navigate("ChatScreen", {
                friendName: props.name,
              });
            }}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={20}
            style={components.icons.deleteIcon}
            onPress={() => {
              removeUser(props.id);
            }}
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
            onPress={() => {
              console.log("Accept request");
            }}
          />
          <IconButton
            icon="delete"
            iconColor="#fff"
            size={20}
            style={components.icons.deleteIcon}
            onPress={() => {
              removeUser(props.id);
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
          size={20}
          style={components.icons.requestIcon}
          onPress={() => {
            addUser(props.id);
          }}
        />
      );
      break;
    case "cancelRequest":
      componentOptions = (
        <IconButton
          icon="cancel"
          iconColor="#fff"
          size={20}
          style={components.icons.cancelRequestIcon}
          onPress={() => {
            console.log("Cancel request");
          }}
        />
      );
      break;
  }

  return (
    <TouchableRipple
      onPress={() => {
        navigation.navigate("FriendProfile", {
          friendName: props.name,
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
