// React
import { useEffect, useState, ReactElement } from "react";

// Hooks
import { useAuth } from "../hooks/useAuth";
import { useProjectsApi } from "../adapters/api/useProjectsApi";

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
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

interface IMember {
  id: string;
  photo: string;
  name: string;
  role: string;
  isUserAdmin: boolean;
}

function isMemberAdmin(role: string) {
  const { components } = styles();
  if (role === "1") {
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
  { id: 1, name: "Admin" },
  { id: 2, name: "Editor" },
  { id: 3, name: "Reader" },
];

function MemberComponent(props: IMember) {
  const navigation = useNavigation<any>();

  const { user } = useAuth();

  const navigateToProfile = () => {
    if (user?.id !== props.id) {
      navigation.navigate("FriendProfile", {
        friendName: props.name,
        friendId: props.id,
      });
    } else {
      navigation.navigate("Profile");
    }
  };

  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  );

  useEffect(() => {
    setSelectedIndex(new IndexPath(parseInt(props.role) - 1));
  }, []);

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { leaveProject } = useProjectsApi(false);

  const { colors, components } = styles();

  return (
    <>
      <TouchableRipple onPress={navigateToProfile}>
        <Card style={components.card}>
          <Card.Title
            title={
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: colors.text }}>{props.name}</Text>
                {isMemberAdmin(props.role)}
              </View>
            }
            subtitle={"Role: " + roles[parseInt(props.role) - 1].name}
            subtitleStyle={{ color: colors.text }}
            left={() => (
              <Avatar.Image size={40} source={{ uri: props.photo }} />
            )}
            right={() => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {props.id !== user?.id ? (
                  <IconButton
                    icon="message"
                    iconColor="#fff"
                    size={15}
                    style={[
                      components.icons.messageIcon,
                      !props.isUserAdmin ? { marginRight: 15 } : null,
                    ]}
                    onPress={() => {
                      navigation.navigate("ChatScreen", {
                        friendName: props.name,
                      });
                    }}
                  />
                ) : null}
                {props.isUserAdmin ? (
                  <IconButton
                    icon="exit-to-app"
                    iconColor="#fff"
                    size={15}
                    style={components.icons.exitIcon}
                    onPress={() => {
                      setModalConfirmVisible(true);
                    }}
                  />
                ) : null}
              </View>
            )}
          />
          {props.isUserAdmin ? (
            <Card.Content style={{ marginTop: 10 }}>
              <View style={components.filter.filterView}>
                <Text style={{ color: colors.text, marginRight: 15 }}>
                  Change role:
                </Text>
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
          ) : null}
        </Card>
      </TouchableRipple>
      <ModalConfirmComponent
        message="Are you sure you want to kick this member out of the project?"
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          leaveProject(props.id);
        }}
      />
    </>
  );
}

export default MemberComponent;
