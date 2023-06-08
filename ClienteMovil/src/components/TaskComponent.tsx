// React
import { useState } from "react";

// Hooks
import { useTasksApi } from "../adapters/api/useTasksApi";

// Componentes
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton } from "react-native-paper";
import { View } from "react-native";
import ModalConfirmComponent from "./ModalConfirmComponent";

import styles from "../styles/styles";

interface ITask {
  id: string;
  idcolumn: string;
  title: string;
  description: string;
  github: string;
}

function TaskComponent(props: ITask) {
  const navigation = useNavigation<any>();

  const { deleteTask } = useTasksApi(false);

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const { colors, components } = styles();

  let role = "";

  return (
    <>
      <Card style={components.task}>
        <Card.Title
          title={props.title}
          titleStyle={{ color: colors.text }}
          subtitle={props.description}
          subtitleStyle={{ color: colors.text }}
          right={() =>
            role !== "reader" && (
              <IconButton
                icon={isExpanded ? "chevron-up" : "chevron-down"}
                iconColor={colors.text}
                size={15}
                style={components.icons.chevronIcon}
                onPress={handleExpand}
              />
            )
          }
        />
        {isExpanded && (
          <Card.Content>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <IconButton
                icon="pencil"
                iconColor="#fff"
                size={15}
                style={[components.icons.pencilIcon, { marginRight: 15 }]}
                onPress={() => {
                  navigation.navigate("EditTask", {
                    taskTitle: props.title,
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
            </View>
          </Card.Content>
        )}
      </Card>
      <ModalConfirmComponent
        message="Are you sure you want to delete this task?"
        confirmText="Confirm"
        dismissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          let idTask = "";
          deleteTask(idTask);
          navigation.goBack();
        }}
      />
    </>
  );
}

export default TaskComponent;
