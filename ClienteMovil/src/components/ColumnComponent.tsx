// React
import { useEffect, useState } from "react";

// Hooks
import { useColumnsApi } from "../adapters/api/useColumnsApi";
import { useTasksApi } from "../adapters/api/useTasksApi";

// Components
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton } from "react-native-paper";
import { FlatList, View } from "react-native";
import TaskComponent from "./TaskComponent";
import LoadingComponent from "./LoadingComponent";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

interface IColumn {
  id: string;
  idboard: string;
  title: string;
}

function ColumnComponent(props: IColumn) {
  const navigation = useNavigation<any>();

  const { deleteColumn } = useColumnsApi(false);

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { data: tasks, loading, fetchData } = useTasksApi(true);

  useEffect(() => {
    return navigation.addListener("focus", () => {
      fetchData();
    });
  }, [navigation]);

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
                    navigation.navigate("EditColumn", {
                      columnTitle: props.title,
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
                    navigation.navigate("CreateTask", { idcolumn: props.id });
                  }}
                />
              )}
            />
          </Card>
          {tasks ? (
            <FlatList
              data={Array.isArray(tasks) ? tasks : [tasks]}
              renderItem={({ item: task }) => <TaskComponent {...task} />}
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
          let idColumn = "";
          deleteColumn(idColumn);
          navigation.goBack();
        }}
      />
    </>
  );
}

export default ColumnComponent;
