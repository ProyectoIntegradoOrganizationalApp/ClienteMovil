// React
import { useContext, useEffect, useState } from "react";

// Contexto
import { AuthContext } from "../context/AuthContext";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";

// Hooks
import { useProjectsApi } from "../adapters/api/useProjectsApi";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const CreateProjectScreen = ({ navigation }: { navigation: any }) => {
  const { createProject } = useProjectsApi(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { colors, screens } = styles();

  const handlePress = () => {
    createProject(name, description);

    setName("");
    setDescription("");

    PopupNotificationComponent(
      "success",
      "Project Created",
      `Project ${name} was created`
    );
  };

  return (
    <View style={[screens.createProject.view, { flex: 1 }]}>
      <TextInput
        placeholder="Project name"
        placeholderTextColor={colors.primary}
        value={name}
        onChangeText={(text) => setName(text)}
        style={screens.createProject.input}
      ></TextInput>
      <TextInput
        placeholder="Project description"
        placeholderTextColor={colors.primary}
        value={description}
        onChangeText={(text) => setDescription(text)}
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        style={screens.createProject.textarea}
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

export default CreateProjectScreen;
