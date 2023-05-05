import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

interface IMember {
  profile: string;
  user: string;
  status: string;
  role: string;
}

function isMemberAdmin(role: string) {
  if (role === "Admin") {
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

function MemberComponent(props: IMember) {
  //const navigation = useNavigation<any>();

  return (
    <Card style={scriptStyles.member}>
      <Card.Title
        title={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>{props.user}</Text>
            {isMemberAdmin(props.role)}
          </View>
        }
        subtitle={props.status}
        left={() => <Avatar.Image size={40} source={{ uri: props.profile }} />}
        right={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/*<SelectDropdown
                data={["Admin", "Editor", "Author", "Partner"]}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
              />*/}
            <Avatar.Icon
              icon="message"
              color="#fff"
              size={30}
              style={scriptStyles.messageIcon}
            />
            <Avatar.Icon
              icon="exit-to-app"
              color="#fff"
              size={30}
              style={scriptStyles.exitIcon}
            />
          </View>
        )}
      />
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  member: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  crownIcon: {
    backgroundColor: "transparent",
  },
  messageIcon: {
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: "grey",
  },
  exitIcon: {
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 5,
    backgroundColor: "#d54f4f",
  },
});

export default MemberComponent;
