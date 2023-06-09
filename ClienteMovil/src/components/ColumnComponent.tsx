// React
import { useEffect, useState } from "react";

// Hooks
import { useColumnsApi } from "../adapters/api/useColumnsApi";
import { useTasksApi } from "../adapters/api/useTasksApi";

// Interfaces
import { Column } from "../domain/columns/Column.interface";

// Components
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton } from "react-native-paper";
import { FlatList, View } from "react-native";
import TaskComponent from "./TaskComponent";
import LoadingComponent from "./LoadingComponent";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

function ColumnComponent(props: Column & { idApp: string }) {
  const navigation = useNavigation<any>();

  const { idApp } = props;

  const { deleteColumn } = useColumnsApi();

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { data: tasks, loading, fetchData } = useTasksApi();

  useEffect(() => {
    return navigation.addListener("focus", () => {
      fetchData(idApp);
    });
  }, [navigation]);

  const { colors, components } = styles();

  return (
    <>
      <Card style={components.column}>
        <Card.Title
          title={props.title}
          right={() => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <IconButton
                icon="pencil"
                iconColor="#fff"
                size={15}
                style={components.icons.pencilIcon}
                onPress={() => {
                  navigation.navigate("EditColumn", {
                    columnTitle: props.title,
                    idapp: idApp,
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
          )}
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
                    navigation.navigate("CreateTask", { idapp: idApp });
                  }}
                />
              )}
            />
          </Card>
          {tasks ? (
            <FlatList
              data={Array.isArray(tasks) ? tasks : [tasks]}
              renderItem={({ item: task }) => (
                <TaskComponent idApp={idApp} {...task} />
              )}
            />
          ) : (
            <LoadingComponent state={loading} />
          )}
        </Card.Content>
      </Card>
      <ModalConfirmComponent
        message="Are you sure you want to delete this column?"
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          deleteColumn(idApp, props.id);
          navigation.goBack();
        }}
      />
    </>
  );
}

export default ColumnComponent;
