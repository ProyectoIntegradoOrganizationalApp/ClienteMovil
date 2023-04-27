import { useNavigation } from "@react-navigation/native";
import { Card, IconButton, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

interface IBoard {
  title: string;
  cover: string;
}

function BoardComponent(props: IBoard) {
  const navigation = useNavigation<any>();
  return (
    <Card style={scriptStyles.board}>
      <Card.Cover
        source={{ uri: props.cover }}
        style={scriptStyles.boardCover}
      />
      <Card.Actions>
        <Text variant="titleLarge">{props.title}</Text>
        <IconButton
          icon="chevron-right"
          style={scriptStyles.boardChevronIcon}
          onPress={() =>
            navigation.navigate("Board", { boardTitle: props.title })
          }
        />
      </Card.Actions>
    </Card>
  );
}

const scriptStyles = StyleSheet.create({
  board: {
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 10,
  },
  boardCover: { borderRadius: 0, resizeMode: "cover" },
  boardChevronIcon: {
    backgroundColor: "transparent",
  },
});

export default BoardComponent;
