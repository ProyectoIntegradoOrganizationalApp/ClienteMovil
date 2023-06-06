// React
import { useState } from "react";

// Intefaces
import { Project } from "../domain/projects/Project.interface";

// Hooks
import { useProjectsApi } from "../adapters/api/useProjectsApi";
import { useAuth } from "../hooks/useAuth";

// Componentes
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton } from "react-native-paper";
import { View } from "react-native";
import ModalConfirmComponent from "./ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

function ProjectComponent(props: Project) {
  const navigation = useNavigation<any>();

  const { deleteProject } = useProjectsApi(true);

  const [modalConfirmVisible, setModalConfirmVisible] = useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const isUserOwned = (owned: string) => {
    return owned === useAuth().user?.id;
  };

  const { colors, components } = styles();

  return (
    <Card style={components.card}>
      <Card.Title
        title={props.name}
        titleStyle={{ color: colors.text }}
        subtitle={props.description}
        subtitleStyle={{ color: colors.text }}
        right={() => (
          <View style={{ flexDirection: "row" }}>
            <IconButton
              icon="eye"
              iconColor="#fff"
              size={15}
              style={[
                components.icons.eyeIcon,
                !props.owner ? { marginRight: 15 } : null,
              ]}
              onPress={() =>
                navigation.navigate("ProjectsSingle", {
                  projectTitle: props.name,
                  project: props,
                })
              }
            />
            {props.owner ? (
              <>
                <IconButton
                  icon="pencil"
                  iconColor="#fff"
                  size={15}
                  style={components.icons.pencilIcon}
                  onPress={() => {
                    navigation.navigate("EditProject", {
                      projectTitle: props.name,
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
              </>
            ) : null}
          </View>
        )}
      />
      <ModalConfirmComponent
        message="Are you sure you want to delete this project?"
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          deleteProject(props.idProject);
          navigation.goBack();
        }}
      />
    </Card>
  );
}

export default ProjectComponent;
