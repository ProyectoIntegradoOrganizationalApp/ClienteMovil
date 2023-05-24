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

function AchievementComponent(props: IAchievement) {
  return (
    <Card style={scriptStyles.achievement}>
      <Card.Title
        title={props.title}
        subtitle={props.description}
        left={() => (
          <Avatar.Image
            size={50}
            source={require(`../assets/images/achievements/icon-achievement-1.png`)}
          />
        )}
        right={() => <Text style={{ marginRight: 15 }}>{props.progress}%</Text>}
      />
      <Card.Content style={{ marginTop: 10 }}>
        <ProgressBar
          progress={props.progress / 100}
          color={styles.colors.grey800}
        />
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
