import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

interface IApp {
  icon: string;
  name: string;
  description: string;
  installed: boolean;
  added: boolean;
  premium: boolean;
}

function isAppPremium(premium: boolean) {
  if (premium) {
    return (
      <Avatar.Icon
        icon="crown"
        color="#ec9d27"
        size={30}
        style={scriptStyles.crownIcon}
      />
    );
  }
}

function AppComponent(props: IApp) {
  const navigation = useNavigation<any>();

  let componentOptions: JSX.Element;
  if (!props.installed) {
    componentOptions = (
      <Avatar.Icon
        icon="basket"
        color="#fff"
        size={30}
        style={scriptStyles.basketIcon}
      />
    );
  } else {
    if (props.added) {
      componentOptions = (
        <Avatar.Icon
          icon="delete"
          color="#fff"
          size={30}
          style={scriptStyles.deleteIcon}
        />
      );
    } else {
      componentOptions = (
        <Avatar.Icon
          icon="plus"
          color="#fff"
          size={30}
          style={scriptStyles.addIcon}
        />
      );
    }
  }

  return (
    <Card style={scriptStyles.app}>
      <Card.Title
        title={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{props.name}</Text>
            {isAppPremium(props.premium)}
          </View>
        }
        subtitle={props.description}
        left={() => <Avatar.Image size={40} source={{ uri: props.icon }} />}
        right={() => (
          <View style={{ flexDirection: "row" }}>
            <Avatar.Icon
              icon="eye"
              color="#fff"
              size={30}
              style={scriptStyles.eyeIcon}
            />
            {componentOptions}
          </View>
        )}
      />
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  app: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  crownIcon: {
    backgroundColor: "transparent",
  },
  eyeIcon: {
    borderRadius: 5,
    backgroundColor: "grey",
  },
  basketIcon: {
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#3c6db2",
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

export default AppComponent;
