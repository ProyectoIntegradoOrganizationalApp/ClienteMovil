// React
import { useState } from "react";

// Hooks
import { useAppsApi } from "../adapters/api/useAppsApi";

// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { Text, View } from "react-native";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

interface IApp {
  id: string;
  idproject: string;
  name: string;
  description: string;
  photo: string;
}

function AppComponent(props: IApp) {
  const navigation = useNavigation<any>();

  const { deleteApp } = useAppsApi(true);

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { colors, components } = styles();

  let owner = true;

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
            {owner ? (
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
            ) : null}
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
          deleteApp(props.id);
          navigation.goBack();
        }}
      />
    </Card>
  );
}

export default AppComponent;
