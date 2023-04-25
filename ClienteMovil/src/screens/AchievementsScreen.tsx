import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AchievementComponent from "../components/AchievementComponent";

const achievements = [
  {
    id: "1",
    image: "https://picsum.photos/163",
    title: "First Steps",
    description: "Finish 5 tasks",
    progess: 40,
  },
  {
    id: "2",
    image: "https://picsum.photos/490",
    title: "Invite a Member",
    description: "Invite a member to a...",
    progess: 100,
  },
  {
    id: "3",
    image: "https://picsum.photos/741",
    title: "Get a Friend",
    description: "Get at least one friend",
    progess: 0,
  },
  {
    id: "4",
    image: "https://picsum.photos/858",
    title: "Create a Project",
    description: "Create one project",
    progess: 100,
  },
];

const AchievementsScreen = () => {
  return (
    <View>
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
      <View>
        <FlatList
          data={achievements}
          renderItem={({ item: ach }) => <AchievementComponent {...ach} />}
        />
      </View>
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  level: {
    height: 120,
    width: 120,
    padding: 10,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#089f7b",
    borderColor: "#089f7b",
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
