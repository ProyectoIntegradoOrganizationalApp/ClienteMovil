import { useNavigation } from "@react-navigation/native";
import { Card, IconButton, Text } from "react-native-paper";

interface IBoard {
  title: string;
  cover: string;
}

function BoardComponent(props: IBoard) {
  const navigation = useNavigation<any>();
  return (
    <Card>
      <Card.Cover source={{ uri: props.cover }} />
      <Card.Actions>
        <Text variant="titleLarge">{props.title}</Text>
        <IconButton
          icon="chevron-right"
          onPress={() =>
            navigation.navigate("Board", { boardTitle: props.title })
          }
        />
      </Card.Actions>
    </Card>
  );
}

export default BoardComponent;
