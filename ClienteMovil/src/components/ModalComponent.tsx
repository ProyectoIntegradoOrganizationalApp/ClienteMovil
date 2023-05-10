import * as React from "react";
import { Modal } from "@ui-kitten/components";
import { Card, IconButton, Portal, Provider, Switch } from "react-native-paper";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import ButtonComponent from "./ButtonComponent";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const ModalComponent = (props: any): React.ReactElement => {
  const { isVisible, setModalVisible: setModalVisible } = props;

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const visibilityOptions = ["None", "Friends Only", "All"];
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));

  return (
    <View>
      <Provider>
        <Portal>
          <Modal
            visible={isVisible}
            backdropStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            style={{ margin: 0 }}
          >
            <Card style={scriptStyles.card}>
              <Card.Title
                title={
                  <Text style={scriptStyles.modalTitle}>Security Settings</Text>
                }
                right={() => (
                  <IconButton
                    icon="close"
                    iconColor="#000000"
                    size={24}
                    onPress={() => {
                      if (isVisible) {
                        setModalVisible(false);
                      }
                    }}
                  />
                )}
                style={{ borderBottomWidth: 2, borderBottomColor: "#ffffff" }}
              />
              <Card.Content>
                <ScrollView style={{ padding: 10 }}>
                  <View style={scriptStyles.modalRow}>
                    <View style={{ flex: 2 }}>
                      <Text style={scriptStyles.modalSubtitle}>
                        Enable Notifications
                      </Text>
                      <Text style={scriptStyles.modalText}>
                        Active this to enable and disabled notifications.
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Switch
                        value={isSwitchOn}
                        onValueChange={onToggleSwitch}
                      />
                    </View>
                  </View>
                  <View style={scriptStyles.modalRow}>
                    <View style={{ flex: 2 }}>
                      <Text style={scriptStyles.modalSubtitle}>
                        Profile Visibility
                      </Text>
                      <Text style={scriptStyles.modalText}>
                        Whetever users can see your profile or not.
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Select
                        value={visibilityOptions[selectedIndex.row]}
                        selectedIndex={selectedIndex}
                        onSelect={(index: IndexPath | IndexPath[]) =>
                          setSelectedIndex(index)
                        }
                      >
                        {visibilityOptions.map(
                          (
                            title: string,
                            index: number
                          ): React.ReactElement => (
                            <SelectItem
                              key={index.toString() + 1}
                              title={title}
                              {...(title === props.role
                                ? { selected: true }
                                : {})}
                            />
                          )
                        )}
                      </Select>
                    </View>
                  </View>
                  <View style={{ marginTop: 15 }}>
                    <Text style={scriptStyles.modalSubtitle}>
                      Change Password
                    </Text>
                    <Text style={scriptStyles.modalText}>
                      Change password to secure your account
                    </Text>
                    <TextInput placeholder="Old Password"></TextInput>
                    <View>
                      <TextInput placeholder="New Password"></TextInput>
                      <TextInput placeholder="Repeat Password"></TextInput>
                    </View>
                    <ButtonComponent type="primary" title="Change" />
                  </View>
                </ScrollView>
              </Card.Content>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  card: {
    borderRadius: 5,
  },
  cardIconActivity: {
    backgroundColor: "transparent",
  },
  modalTitle: {
    fontSize: 20,
    textAlign: "left",
  },
  modalSubtitle: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: "600",
  },
  modalText: {
    fontSize: 14,
    textAlign: "left",
  },
  modalRow: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ModalComponent;
