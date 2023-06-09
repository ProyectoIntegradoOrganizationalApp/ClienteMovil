// React
import { useState } from "react";

// Hooks
import { useAppsApi } from "../adapters/api/useAppsApi";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const CreateAppScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { idproject } = route.params;

  const { createApp } = useAppsApi();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { colors, screens } = styles();

  const handlePress = () => {
    createApp(idproject, name, description);

    setName("");
    setDescription("");

    PopupNotificationComponent(
      "success",
      "App Created",
      `App ${name} was created`
    );
  };

  return (
    <View style={[screens.createBoard.view, { flex: 1 }]}>
      <TextInput
        placeholder="App name"
        placeholderTextColor={colors.primary}
        value={name}
        onChangeText={(text) => setName(text)}
        style={screens.createBoard.input}
      ></TextInput>
      <TextInput
        placeholder="App description"
        placeholderTextColor={colors.primary}
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        style={screens.createProject.textarea}
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

export default CreateAppScreen;
