import { Card, IconButton, Text } from "react-native-paper";

interface IBoard {
  title: string;
  cover: string;
}

const BoardComponent = (props: IBoard, { navigation }: { navigation: any }) => (
  <Card>
    <Card.Content>
      <Text variant="titleLarge">{props.title}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: props.cover }} />
    <Card.Actions>
      <IconButton
        icon="chevron-right"
        onPress={() => navigation.navigate("Board")}
      />
    </Card.Actions>
  </Card>
);

export default BoardComponent;
