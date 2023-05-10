import React, { useState } from "react";
import { Avatar, Card, IconButton } from "react-native-paper";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "@ui-kitten/components";
import styles from "../styles/styles";
import ModalComponent from "../components/ModalComponent";
import ModalConfirmComponent from "../components/ModalConfirmComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

const ActivityScreen = () => {
  const [modalConfirmVisible, setModalConfirmVisible] = React.useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const handleModalState = (e: boolean) => {
    setModalVisible(e);
  };

  const [date, setDate] = React.useState(new Date());
  return (
    <ScrollView>
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
                setModalVisible(true);
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
      <Card style={[scriptStyles.card, { marginBottom: 15 }]}>
        <Card.Title
          title="April - 2023"
          titleStyle={{ textAlign: "center" }}
          style={{ borderBottomWidth: 2, borderBottomColor: "#ffffff" }}
        />
        <Card.Content>
          <Calendar date={date} onSelect={(nextDate) => setDate(nextDate)} />
        </Card.Content>
      </Card>
      <ModalComponent
        isVisible={modalVisible}
        setModalVisible={handleModalState}
      />
      <ModalConfirmComponent
        message={
          <Text>
            Are you sure you want to
            <Text style={{ color: "#e45f5f" }}>proceed with this action</Text>?
          </Text>
        }
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
      />
      {/*
      <PopupNotificationComponent />*/}
    </ScrollView>
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
