import { Avatar, Card, IconButton } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import styles from "../styles/styles";
import ModalConfirmComponent from "../components/ModalConfirmComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

const ActivityScreen = () => {
  return (
    <View>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasks this Week"
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={scriptStyles.cardIconTask}
            />
          )}
          right={() => (
            <Text style={{ marginRight: 20, fontSize: 32, fontWeight: "800" }}>
              15
            </Text>
          )}
        />
      </Card>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Finished Tasks this Day"
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={scriptStyles.cardIconTask}
            />
          )}
          right={() => (
            <Text style={{ marginRight: 20, fontSize: 32, fontWeight: "800" }}>
              2
            </Text>
          )}
        />
      </Card>
      <Card style={scriptStyles.card}>
        <Card.Title
          title="Daily Activity"
          titleStyle={{ textAlign: "center" }}
          left={() => (
            <IconButton
              icon="help-circle"
              size={35}
              iconColor="grey"
              style={scriptStyles.cardIconActivity}
              onPress={() => {
                //popIn;
              }}
            />
          )}
          right={() => (
            <IconButton
              icon="cog"
              size={35}
              iconColor="grey"
              style={[scriptStyles.cardIconActivity, { marginRight: 15 }]}
            />
          )}
          style={{ borderBottomWidth: 2, borderBottomColor: "#ffffff" }}
        />
        <Card.Content>
          <View style={{ padding: 10 }}>
            <Text>Graficas</Text>
          </View>
        </Card.Content>
      </Card>
      {/*
      <PopupNotificationComponent
        type="success"
        title="Project Created"
        message="Project 'algo' was created"
      />
      
        <ModalConfirmComponent
          message={
          <Text>
            Are you sure you want to
            <span style={{ color: "#e45f5f" }}>
            proceed with this action
            </span>
            ?
          </Text>
          }
          confirmText="Confirm"
          dimissText="Cancel"
          isVisible="true"
        />; 
      */}
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  card: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  cardIconTask: {
    backgroundColor: "white",
  },
  cardIconActivity: {
    backgroundColor: "transparent",
  },
});

export default ActivityScreen;
