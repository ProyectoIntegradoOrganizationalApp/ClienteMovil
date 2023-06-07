// React
import { useState } from "react";

// Hooks
import { useProjectsApi } from "../adapters/api/useProjectsApi";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const CreateColumnScreen = ({ navigation }: { navigation: any }) => {
  const { createColumn } = useProjectsApi(false);

  const [name, setName] = useState("");

  const { colors, screens } = styles();

  const handlePress = () => {
    createColumn(name);

    setName("");

    PopupNotificationComponent(
      "success",
      "Column Created",
      `Column ${name} was created`
    );
  };

  return (
    <View style={[screens.createProject.view, { flex: 1 }]}>
      <TextInput
        placeholder="Column name"
        placeholderTextColor={colors.primary}
        value={name}
        onChangeText={(text) => setName(text)}
        style={screens.createProject.input}
      ></TextInput>
      <View style={screens.createProject.viewRow}>
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

export default CreateColumnScreen;
