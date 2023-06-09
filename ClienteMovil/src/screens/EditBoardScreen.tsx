// React
import { useState } from "react";

// Hooks
import { useBoardsApi } from "../adapters/api/useBoardsApi";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const EditBoardScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { colors, screens } = styles();

  const { props } = route.params;

  const { editBoard } = useBoardsApi();

  const [newName, setNewName] = useState("");

  const handlePress = () => {
    editBoard(props.idapp, props.id, newName);

    navigation.goBack();

    PopupNotificationComponent(
      "success",
      "Board Edited",
      `Board ${props.name} was edited`
    );
  };

  return (
    <View style={[screens.createBoard.view, { flex: 1 }]}>
      <TextInput
        placeholder="Board name"
        placeholderTextColor={colors.primary}
        defaultValue={props.name}
        onChangeText={(text) => setNewName(text)}
        style={screens.createBoard.input}
      ></TextInput>
      <View style={screens.createBoard.viewRow}>
        <ButtonComponent
          type="secondary"
          title="Cancel"
          size="small"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ButtonComponent
          type="primary"
          title="Confirm"
          size="small"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default EditBoardScreen;
