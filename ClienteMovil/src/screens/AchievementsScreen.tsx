// React
import { useContext } from "react";

// Contexto
import { AuthContext } from "../domain/context/AuthContext";

// Hooks
import useAchievements from "../hooks/useAchievements";

// Componentes
import { FlatList, View } from "react-native";
import AchievementComponent from "../components/AchievementComponent";
import LevelProgressComponent from "../components/LevelProgressComponent";

// Estilos
import styles from "../styles/styles";

const AchievementsScreen = ({ navigation }: { navigation: any }) => {
  const { user } = useContext(AuthContext);

  const { achievements } = useAchievements();

  const { screens } = styles();

  return (
    <View style={screens.achievements.container}>
      <View style={screens.achievements.levelContainer}>
        <LevelProgressComponent
          level={user?.level}
          progress={25}
          radius={75}
          strokeWidth={15}
        />
      </View>
      <View style={screens.achievements.flatListContainer}>
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

export default AchievementsScreen;
