// React
import { useState } from "react";

// Hooks

// Components
import { Card, IconButton } from "react-native-paper";
import { FlatList, View } from "react-native";
import TaskComponent from "./TaskComponent";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

interface IColumn {
  id: string;
  idboard: string;
  title: string;
}

const tasks = [
  {
    id: "1",
    idcolumn: "1",
    title: "Task 1",
    description: "Descripcion task 1",
    github: "Github",
  },
  {
    id: "2",
    idcolumn: "2",
    title: "Task 2",
    description: "Descripcion task 2",
    github: "Github",
  },
  {
    id: "3",
    idcolumn: "3",
    title: "Task 3",
    description: "Descripcion task 3",
    github: "Github",
  },
];

function ColumnComponent(props: IColumn) {
  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { colors, components } = styles();

  let role = "";

  return (
    <>
      <Card style={components.column}>
        <Card.Title
          title={props.title}
          right={() =>
            role !== "reader" && (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <IconButton
                  icon="pencil"
                  iconColor="#fff"
                  size={15}
                  style={components.icons.pencilIcon}
                  onPress={() => {
                    console.log("Edit column");
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
            )
          }
        />
        <Card.Content>
          <Card style={components.addTask}>
            <Card.Title
              title="New Task"
              titleStyle={{ color: colors.text }}
              right={() => (
                <IconButton
                  icon="plus"
                  iconColor="#fff"
                  size={15}
                  style={[components.icons.addIcon, { marginRight: 15 }]}
                  onPress={() => {
                    console.log("Add task");
                  }}
                />
              )}
            />
          </Card>
          <FlatList
            data={tasks}
            renderItem={({ item: task }) => <TaskComponent {...task} />}
          />
        </Card.Content>
      </Card>
      <ModalConfirmComponent
        message="Are you sure you want to delete this column?"
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          console.log("Delete column");
        }}
      />
    </>
  );
}

export default ColumnComponent;
