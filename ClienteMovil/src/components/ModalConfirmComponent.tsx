import * as React from "react";
import { Avatar, Card, Modal, Portal } from "react-native-paper";
import ButtonComponent from "./ButtonComponent";
import { StyleSheet, Text, View } from "react-native";

const ModalConfirmComponent = (props: any) => {
  const { message, confirmText, dimissText, isVisible = false } = props;

  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={() => {}}>
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
