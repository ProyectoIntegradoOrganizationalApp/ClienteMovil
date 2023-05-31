// Componentes
import { Avatar, Card, ProgressBar } from "react-native-paper";
import { Text } from "react-native";
//import { achievementsIcons } from "../utils/achievementsIcons"; // TODO: Use this

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

const achievementsIcons = [
  {
    id: "1",
    icon: require(`../assets/images/achievements/icon-achievement-1.png`),
  },
  {
    id: "2",
    icon: require(`../assets/images/achievements/icon-achievement-2.png`),
  },
  {
    id: "3",
    icon: require(`../assets/images/achievements/icon-achievement-3.png`),
  },
  {
    id: "4",
    icon: require(`../assets/images/achievements/icon-achievement-4.png`),
  },
];

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
