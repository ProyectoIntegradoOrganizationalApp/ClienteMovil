// React
import { useEffect, useState, ReactElement } from "react";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Components
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton, TouchableRipple } from "react-native-paper";
import { Text, View } from "react-native";
import {
  ApplicationProvider,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";

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
  const navigation = useNavigation<any>();

  const navigateToProfile = () => {
    if (useAuth().user?.name !== props.user) {
      navigation.navigate("FriendProfile", { friendName: props.user });
    } else {
      navigation.navigate("Profile");
    }
  };

  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  );

  useEffect(() => {
    setSelectedIndex(new IndexPath(props.role));
  }, []);

  const { colors, components } = styles();

  return (
    <TouchableRipple onPress={navigateToProfile}>
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
          left={() => (
            <Avatar.Image size={40} source={{ uri: props.profile }} />
          )}
          right={() => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconButton
                icon="message"
                iconColor="#fff"
                size={30}
                style={[components.icons.messageIcon, { marginLeft: 10 }]}
                onPress={() => {
                  navigation.navigate("ChatScreen", {
                    friendName: props.user,
                  });
                }}
              />
              <IconButton
                icon="exit-to-app"
                iconColor="#fff"
                size={30}
                style={components.icons.exitIcon}
              />
            </View>
          )}
        />
        <Card.Content style={{ marginTop: 10 }}>
          <View style={components.filter.filterView}>
            <Text style={{ color: colors.text, marginRight: 15 }}>Role:</Text>
            <ApplicationProvider
              mapping={mapping}
              theme={components.filter.filterSelectTheme}
            >
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
            </ApplicationProvider>
          </View>
        </Card.Content>
      </Card>
    </TouchableRipple>
  );
}

export default MemberComponent;
