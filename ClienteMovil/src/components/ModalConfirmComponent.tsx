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
                title={
                  <Avatar.Icon
                    icon="alert-circle"
                    size={35}
                    color="#ffc048"
                    style={scriptStyles.cardIconActivity}
                  />
                }
                style={{ borderBottomWidth: 2, borderBottomColor: "#ffffff" }}
              />
              <Card.Content>
                <View style={{ padding: 10 }}>
                  {message}
                  <ButtonComponent type="confirm" title={confirmText} />
                  <ButtonComponent type="primary" title={dimissText} />
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
  cardIconActivity: {
    backgroundColor: "transparent",
  },
});

export default ModalConfirmComponent;
