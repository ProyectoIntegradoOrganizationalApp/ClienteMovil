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

const EditProjectScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { colors, screens } = styles();

  const { props } = route.params;

  const { editProject } = useProjectsApi(true);

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handlePress = () => {
    editProject(props.idProject, newName, newDescription);

    navigation.goBack();

    PopupNotificationComponent(
      "success",
      "Project Edited",
      `Project ${props.name} was edited`
    );
  };

  return (
    <View style={[screens.createProject.view, { flex: 1 }]}>
      <TextInput
        placeholder="Project name"
        placeholderTextColor={colors.primary}
        defaultValue={props.name}
        onChangeText={(text) => setNewDescription(text)}
        style={screens.createProject.input}
      ></TextInput>
      <TextInput
        placeholder="Project description"
        placeholderTextColor={colors.primary}
        defaultValue={props.description}
        onChangeText={(text) => setNewName(text)}
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

export default EditProjectScreen;
