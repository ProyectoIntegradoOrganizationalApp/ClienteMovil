// React
import { useContext, useEffect, useState } from "react";

// Contexto
import { AuthContext } from "../context/AuthContext";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";

// Hooks
import { useUserApi } from "../adapters/api/useUserApi";
import { useAuth } from "../hooks/useAuth";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const EditProjectScreen = ({ navigation }: { navigation: any }) => {
  const { colors, screens } = styles();

  const handlePress = () => {
    PopupNotificationComponent(
      "success",
      "Project Edited",
      "Project 'algo' was edited"
    );
  };

  const props = {
    projectTitle: "Title",
    projectDescription: "Description",
  };

  return (
    <View style={[screens.createProject.view, { flex: 1 }]}>
      <TextInput
        placeholder="Project name"
        placeholderTextColor={colors.primary}
        defaultValue={props.projectTitle}
        style={screens.createProject.input}
      ></TextInput>
      <TextInput
        placeholder="Project description"
        placeholderTextColor={colors.primary}
        defaultValue={props.projectDescription}
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
