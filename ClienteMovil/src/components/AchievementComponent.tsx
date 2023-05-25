import { Avatar, Card, ProgressBar } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import styles from "../styles/styles";

interface IAchievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
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
  const { colors } = styles();

  return (
    <Card style={scriptStyles.achievement}>
      <Card.Title
        title={props.title}
        subtitle={props.description}
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
        right={() => <Text style={{ marginRight: 15 }}>{props.progress}%</Text>}
      />
      <Card.Content style={{ marginTop: 10 }}>
        <ProgressBar progress={props.progress / 100} color={colors.grey800} />
      </Card.Content>
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  achievement: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
});

export default AchievementComponent;
