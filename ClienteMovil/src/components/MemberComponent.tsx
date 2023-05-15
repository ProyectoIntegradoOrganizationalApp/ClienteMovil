import { useEffect, useState, ReactElement } from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";

interface IMember {
  profile: string;
  user: string;
  status: string;
  role: number;
}

function isMemberAdmin(role: number) {
  if (roles[role].name === "Admin") {
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

const roles = [
  { id: 0, name: "Admin" },
  { id: 1, name: "Editor" },
  { id: 2, name: "Author" },
  { id: 3, name: "Partner" },
];

function MemberComponent(props: IMember) {
  //const navigation = useNavigation<any>();

  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  );

  useEffect(() => {
    setSelectedIndex(new IndexPath(props.role));
  }, []);

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
      <Card.Content style={{ marginTop: 10 }}>
        <View style={scriptStyles.roleView}>
          <Text style={{ marginRight: 15 }}>Role:</Text>
          <Select
            value={roles[selectedIndex.row].name}
            selectedIndex={selectedIndex}
            onSelect={(index: any) => setSelectedIndex(index)}
            style={{ flex: 1 }}
          >
            {roles.map(
              (role): ReactElement => (
                <SelectItem key={role.id} title={role.name} />
              )
            )}
          </Select>
        </View>
      </Card.Content>
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
  roleView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 10,
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
