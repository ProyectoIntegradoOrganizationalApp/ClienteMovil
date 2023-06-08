// Componentes
import { Avatar, Card, ProgressBar } from "react-native-paper";
import { Text } from "react-native";
import { achievementsIcons } from "../utils/achievementsIcons";

// Estilos
import styles from "../styles/styles";

interface IAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  progress: number;
  filterBy: string;
}

function AchievementComponent(props: IAchievement) {
  const { colors, components } = styles();

  if (
    props.category === props.filterBy.toLowerCase() ||
    props.filterBy === "All"
  ) {
    return (
      <Card style={components.card}>
        <Card.Title
          title={props.title}
          titleStyle={{ color: colors.text }}
          subtitle={props.description}
          subtitleStyle={{ color: colors.text }}
          left={() =>
            achievementsIcons.map((achievementIcon) =>
              achievementIcon.id === props.id ? (
                <Avatar.Image
                  key={achievementIcon.id}
                  size={50}
                  source={achievementIcon.icon}
                />
              ) : (
                ""
              )
            )
          }
          right={() => (
            <Text style={{ marginRight: 15, color: colors.text }}>
              {props.progress}%
            </Text>
          )}
        />
        <Card.Content style={{ marginTop: 10 }}>
          <ProgressBar
            progress={props.progress / 100}
            color={colors.primary}
            style={{ backgroundColor: colors.loader }}
          />
        </Card.Content>
      </Card>
    );
  }
  return null;
}

export default AchievementComponent;
