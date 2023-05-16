import * as React from "react";
import { Modal } from "@ui-kitten/components";
import { Avatar, Card, Portal, Provider } from "react-native-paper";
import ButtonComponent from "./ButtonComponent";
import { Button, StyleSheet, View } from "react-native";

const ModalConfirmComponent = (props: any): React.ReactElement => {
  const {
    message,
    confirmText,
    dimissText,
    isVisible,
    setModalConfirmVisible: setModalConfirmVisible,
  } = props;

  return (
    <View>
      <Provider>
        <Portal>
          <Modal
            visible={isVisible}
            backdropStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onBackdropPress={() => {
              if (isVisible) {
                setModalConfirmVisible(false);
              }
            }}
          >
            <Card style={scriptStyles.card}>
              <Card.Title
                title=""
                left={() => (
                  <Avatar.Icon
                    icon="alert-circle"
                    size={90}
                    color="#ffc048"
                    style={scriptStyles.cardIconActivity}
                  />
                )}
                leftStyle={{
                  flex: 45,
                  alignItems: "center",
                }}
                style={scriptStyles.cardTitle}
              />
              <Card.Content>
                <View style={{ padding: 10 }}>
                  <View style={{ marginTop: 10 }} />
                  {message}
                  <View style={{ marginVertical: 10 }} />
                  <ButtonComponent type="confirm" title={confirmText} />
                  <View style={{ marginVertical: 10 }} />
                  <ButtonComponent
                    type="primary"
                    title={dimissText}
                    onPress={() => {
                      if (isVisible) {
                        setModalConfirmVisible(false);
                      }
                    }}
                  />
                </View>
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
    marginTop: 15,
    marginHorizontal: 10,
  },
  cardTitle: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#ffffff",
  },
  cardIconActivity: {
    backgroundColor: "transparent",
  },
});

export default ModalConfirmComponent;
