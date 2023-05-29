// React
import * as React from "react";

// Componentes
import { Modal } from "@ui-kitten/components";
import { Avatar, Card, Portal, Provider } from "react-native-paper";
import ButtonComponent from "./ButtonComponent";
import { Text, View } from "react-native";

// Estilos
import styles from "../styles/styles";

const ModalConfirmComponent = (props: any): React.ReactElement => {
  const {
    message,
    confirmText,
    dimissText,
    isVisible,
    setModalConfirmVisible: setModalConfirmVisible,
    onConfirm,
  } = props;

  const { colors, components } = styles();

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
            <Card style={components.modal.modal}>
              <Card.Title
                title=""
                left={() => (
                  <Avatar.Icon
                    icon="alert-circle"
                    size={90}
                    color="#ffc048"
                    style={components.modal.cardIconActivity}
                  />
                )}
                leftStyle={{
                  flex: 45,
                  alignItems: "center",
                }}
                style={components.modal.cardTitle}
              />
              <Card.Content>
                <View style={{ padding: 10 }}>
                  <View style={{ marginTop: 10 }} />
                  <Text style={{ fontSize: 16, color: colors.text }}>
                    {message}
                  </Text>
                  <View style={{ marginVertical: 10 }} />
                  <ButtonComponent
                    type="confirm"
                    title={confirmText}
                    onPress={() => {
                      onConfirm();
                      if (isVisible) {
                        setModalConfirmVisible(false);
                      }
                    }}
                  />
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

export default ModalConfirmComponent;
