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

const CreateBoardScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { idapp } = route.params;

  const { createBoard } = useBoardsApi();

  const [name, setName] = useState("");

  const { colors, screens } = styles();

  const handlePress = () => {
    createBoard(idapp, name);

    setName("");

    PopupNotificationComponent(
      "success",
      "Board Created",
      `Board ${name} was created`
    );
  };

  return (
    <View style={[screens.createBoard.view, { flex: 1 }]}>
      <TextInput
        placeholder="Board name"
        placeholderTextColor={colors.primary}
        value={name}
        onChangeText={(text) => setName(text)}
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

export default CreateBoardScreen;
