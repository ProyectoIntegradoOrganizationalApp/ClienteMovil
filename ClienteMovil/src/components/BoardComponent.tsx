// React
import { useState } from "react";

// Hooks
import { useBoardsApi } from "../adapters/api/useBoardsApi";

// Componentes
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton, Text } from "react-native-paper";
import { View } from "react-native";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

interface IBoard {
  id: string;
  title: string;
  photo: string;
  idapp: string;
}

function BoardComponent(props: IBoard) {
  const navigation = useNavigation<any>();

  const { deleteBoard } = useBoardsApi(true);

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { colors, components } = styles();

  return (
    <Card style={components.board.board}>
      <Card.Cover source={{ uri: props.photo }} />
      <Card.Actions>
        <Text variant="titleLarge" style={{ color: colors.text, flex: 1 }}>
          {props.title}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <IconButton
            icon="eye"
            iconColor="#fff"
            size={15}
            style={[
              components.icons.eyeIcon,
              !props.idapp ? { marginRight: 15 } : null,
            ]}
            onPress={() =>
              navigation.navigate("BoardSingle", {
                boardTitle: props.title,
                board: props,
              })
            }
          />
          {props.idapp ? (
            <>
              <IconButton
                icon="pencil"
                iconColor="#fff"
                size={15}
                style={components.icons.pencilIcon}
                onPress={() => {
                  navigation.navigate("EditBoard", {
                    projectTitle: props.title,
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
      </Card.Actions>
      <ModalConfirmComponent
        message="Are you sure you want to delete this board?"
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          let idBoard = "";
          deleteBoard(idBoard);
          navigation.goBack();
        }}
      />
    </Card>
  );
}

export default BoardComponent;
