// React
import React from "react";

// Hooks
import useProfile from "../hooks/useProfile";
import useAchievements from "../hooks/useAchievements";

// Componentes
import { FlatList, Text, View } from "react-native";
import AchievementComponent from "../components/AchievementComponent";
import LevelProgressComponent from "../components/LevelProgressComponent";
import {
  ApplicationProvider,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";

// Estilos
import styles from "../styles/styles";

const filters = ["All", "App", "Friend", "Project"];

const AchievementsScreen = ({ route }: { route: any }) => {
  const { profileId } = route.params;
  const { profile } = useProfile(profileId);

  const { achievements } = useAchievements();

  const { components, screens } = styles();

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0)
  );

  return (
    <View style={screens.achievements.container}>
      <View style={screens.achievements.levelContainer}>
        <LevelProgressComponent
          level={profile?.user?.level}
          progress={25}
          radius={75}
          strokeWidth={15}
        />
      </View>
      <View style={components.filter.filterView}>
        <Text style={components.filter.filterText}>Filter by:</Text>
        <ApplicationProvider
          mapping={mapping}
          theme={components.filter.filterSelectTheme}
        >
          <Select
            value={filters[selectedIndex.row]}
            selectedIndex={selectedIndex}
            onSelect={(index: any) => setSelectedIndex(index)}
            style={components.filter.filterSelect}
          >
            {filters.map(
              (title: string, index: number): React.ReactElement => (
                <SelectItem key={index.toString()} title={title} />
              )
            )}
          </Select>
        </ApplicationProvider>
      </View>
      <View style={screens.achievements.flatListContainer}>
        <FlatList
          horizontal={false}
          scrollEnabled={true}
          data={achievements}
          renderItem={({ item: ach }) => (
            <AchievementComponent
              filterBy={filters[selectedIndex.row]}
              {...ach}
            />
          )}
        />
      </View>
    </View>
  );
};

export default AchievementsScreen;
