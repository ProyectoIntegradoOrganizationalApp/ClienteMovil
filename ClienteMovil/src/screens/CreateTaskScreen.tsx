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

const CreateTaskScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { idapp } = route.params;

  const { createTask } = useTasksApi();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { colors, screens } = styles();

  const handlePress = () => {
    createTask(idapp, name, description);

    setName("");
    setDescription("");

    PopupNotificationComponent(
      "success",
      "Task Created",
      `Task ${name} was created`
    );
  };

  return (
    <View style={[screens.createProject.view, { flex: 1 }]}>
      <TextInput
        placeholder="Task name"
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

export default CreateTaskScreen;
