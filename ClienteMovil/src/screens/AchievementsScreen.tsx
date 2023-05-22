import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import AchievementComponent from "../components/AchievementComponent";
import useAchievements from "../hooks/useAchievements";

const AchievementsScreen = ({ navigation }: { navigation: any }) => {
  const { achievements } = useAchievements();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="help-circle"
          size={25}
          iconColor="grey"
          style={scriptStyles.icon}
        />
        <IconButton
          icon="cog"
          size={25}
          iconColor="grey"
          style={scriptStyles.icon}
        />
      </View>
      <View style={{ alignItems: "center", marginBottom: 31 }}>
        <View style={scriptStyles.level}>
          <View style={scriptStyles.levelContent}>
            <Text style={scriptStyles.levelTextTitle}>Level</Text>
            <Text style={scriptStyles.levelTextSubtitle}>100</Text>
          </View>
        </View>
        <View style={scriptStyles.levelBottom}>
          <Text>Newbie</Text>
        </View>
      </View>
      <View style={{ height: "60%" }}>
        <FlatList
          horizontal={false}
          scrollEnabled={true}
          data={achievements}
          renderItem={({ item: ach }) => <AchievementComponent {...ach} />}
        />
      </View>
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  icon: {
    borderRadius: 5,
    backgroundColor: "transparent",
  },
  level: {
    height: 120,
    width: 120,
    padding: 10,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#089f7b",
    zIndex: 1,
    elevation: 1,
  },
  levelContent: {
    height: 100,
    width: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#ffffff",
  },
  levelBottom: {
    width: 90,
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 10,
    backgroundColor: "#089f7b",
    position: "absolute",
    top: 115,
  },
  levelTextTitle: {
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: -7,
  },
  levelTextSubtitle: {
    fontSize: 35,
    fontWeight: "900",
    textTransform: "uppercase",
  },
});

export default AchievementsScreen;
