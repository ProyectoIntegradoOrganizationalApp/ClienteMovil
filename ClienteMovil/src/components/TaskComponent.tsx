import { useState } from "react";
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
          <Card.Actions>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <IconButton
                icon="pencil"
                iconColor="#fff"
                size={15}
                style={components.icons.pencilIcon}
                onPress={() => {
                  console.log("Edit task");
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
          </Card.Actions>
        )}
      </Card>
      <ModalConfirmComponent
        message="Are you sure you want to delete this column?"
        confirmText="Confirm"
        dismissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          console.log("Delete task");
        }}
      />
    </>
  );
}

export default TaskComponent;
