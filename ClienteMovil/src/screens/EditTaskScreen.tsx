// React
import { useState } from "react";

// Hooks
import { useTasksApi } from "../adapters/api/useTasksApi";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const EditTaskScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { colors, screens } = styles();

  const { idapp, props } = route.params;

  const { editTask } = useTasksApi();

  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handlePress = () => {
    editTask(idapp, newName, newDescription, props.id);

    navigation.goBack();

    PopupNotificationComponent(
      "success",
      "Task Edited",
      `Task ${props.name} was edited`
    );
  };

  return (
    <View style={[screens.createProject.view, { flex: 1 }]}>
      <TextInput
        placeholder="Task name"
        placeholderTextColor={colors.primary}
        defaultValue={props.name}
        onChangeText={(text) => setNewDescription(text)}
        style={screens.createProject.input}
      ></TextInput>
      <TextInput
        placeholder="Task description"
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

export default EditTaskScreen;
