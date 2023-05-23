import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AchievementComponent from "../components/AchievementComponent";
import { AuthContext } from "../domain/context/AuthContext";
import useAchievements from "../hooks/useAchievements";
import LevelProgressComponent from "../components/LevelProgressComponent";

const AchievementsScreen = ({ navigation }: { navigation: any }) => {
  const { user } = useContext(AuthContext);
  const { achievements } = useAchievements();

  return (
    <View>
      <View style={{ alignItems: "center", marginVertical: 15 }}>
        <LevelProgressComponent
          level={user?.level}
          progress={5}
          radius={75}
          strokeWidth={15}
          barColor="#089f7b"
          textColor="black"
        />
      </View>
      <View style={{ height: "73%" }}>
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

const scriptStyles = StyleSheet.create({});

export default AchievementsScreen;
