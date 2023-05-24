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
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginVertical: 15 }}>
        <LevelProgressComponent
          level={user?.level}
          progress={25}
          radius={75}
          strokeWidth={15}
        />
      </View>
      <View style={{ flex: 1, paddingBottom: 15 }}>
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
