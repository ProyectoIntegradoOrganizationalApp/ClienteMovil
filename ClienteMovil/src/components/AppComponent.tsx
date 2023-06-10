// React
import { useState } from "react";

// Interfaces
import { App } from "../domain/apps/App.interface";

// Hooks
import { useAppsApi } from "../adapters/api/useAppsApi";

// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { Text, View } from "react-native";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

function AppComponent(props: App) {
  const navigation = useNavigation<any>();

  const { deleteApp } = useAppsApi();

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { colors, components } = styles();

  return (
    <Card style={components.card}>
      <Card.Title
        title={<Text style={{ color: colors.text }}>{props.name}</Text>}
        subtitle={props.description}
        subtitleStyle={{ color: colors.text }}
        left={() => <Avatar.Image size={40} source={{ uri: props.photo }} />}
        right={() => (
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="eye"
              iconColor="#fff"
              size={15}
              style={components.icons.eyeIcon}
              onPress={() =>
                navigation.navigate("BoardList", {
                  appTitle: props.name,
                  app: props,
                })
              }
            />
            <>
              <IconButton
                icon="pencil"
                iconColor="#fff"
                size={15}
                style={components.icons.pencilIcon}
                onPress={() => {
                  navigation.navigate("EditApp", {
                    appTitle: props.name,
                    props: props,
                  });
                }}
              />
              <IconButton
                icon="delete"
                iconColor="#fff"
                size={15}
                style={components.icons.deleteIcon}
                onPress={() => {
                  setModalConfirmVisible(true);
                }}
              />
            </>
          </View>
        )}
      />
      <ModalConfirmComponent
        message="Are you sure you want to delete this app?"
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          deleteApp(props.idProject, props.id);
          navigation.goBack();
        }}
      />
    </Card>
  );
}

export default AppComponent;
