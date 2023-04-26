import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet, View } from "react-native";

interface IFriend {
  type: string;
  profile: string;
  user: string;
  status: string;
}

function FriendComponent(props: IFriend) {
  //const navigation = useNavigation<any>();
  let componentOptions: JSX.Element;
  switch (props.type) {
    case "chat":
      componentOptions = (
        <View style={{ flexDirection: "row" }}>
          <Avatar.Icon
            icon="message"
            color="#fff"
            size={30}
            style={scriptStyles.messageIcon}
          />
          <Avatar.Icon
            icon="delete"
            color="#fff"
            size={30}
            style={scriptStyles.deleteIcon}
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
          style={scriptStyles.addIcon}
        />
      );
      break;
  }

  return (
    <Card style={scriptStyles.friend}>
      <Card.Title
        title={props.user}
        subtitle={props.status}
        left={() => <Avatar.Image size={40} source={{ uri: props.profile }} />}
        right={() => componentOptions}
      />
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  friend: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  messageIcon: {
    borderRadius: 5,
    backgroundColor: "grey",
  },
  deleteIcon: {
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#d54f4f",
  },
  addIcon: {
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#008f39",
  },
});

export default FriendComponent;
