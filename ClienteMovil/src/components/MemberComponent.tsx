// React
import { useEffect, useState, ReactElement } from "react";

// Components
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { Text, View } from "react-native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";

// Estilos
import styles from "../styles/styles";

interface IMember {
  profile: string;
  user: string;
  status: string;
  role: number;
}

function isMemberAdmin(role: number) {
  const { components } = styles();

  if (roles[role].name === "Admin") {
    return (
      <Avatar.Icon
        icon="crown"
        color="#ec9d27"
        size={30}
        style={components.icons.crownIcon}
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

  const { colors, components } = styles();

  return (
    <Card style={components.card}>
      <Card.Title
        title={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: colors.text }}>{props.user}</Text>
            {isMemberAdmin(props.role)}
          </View>
        }
        subtitle={props.status}
        subtitleStyle={{ color: colors.text }}
        left={() => <Avatar.Image size={40} source={{ uri: props.profile }} />}
        right={() => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Icon
              icon="message"
              color="#fff"
              size={30}
              style={[components.icons.messageIcon, { marginLeft: 10 }]}
            />
            <Avatar.Icon
              icon="exit-to-app"
              color="#fff"
              size={30}
              style={components.icons.exitIcon}
            />
          </View>
        )}
      />
      <Card.Content style={{ marginTop: 10 }}>
        <View style={components.filter.filterView}>
          <Text style={{ color: colors.text, marginRight: 15 }}>Role:</Text>
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

export default MemberComponent;
