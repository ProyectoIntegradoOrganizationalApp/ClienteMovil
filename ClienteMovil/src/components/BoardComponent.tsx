// Componentes
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton, Text } from "react-native-paper";

// Estilos
import styles from "../styles/styles";

interface IBoard {
  title: string;
  cover: string;
}

function BoardComponent(props: IBoard) {
  const navigation = useNavigation<any>();

  const { components } = styles();

  return (
    <Card style={components.board.board}>
      <Card.Cover
        source={{ uri: props.cover }}
        style={components.board.boardCover}
      />
      <Card.Actions>
        <Text variant="titleLarge">{props.title}</Text>
        <IconButton
          icon="chevron-right"
          style={components.board.boardChevronIcon}
          onPress={() =>
            navigation.navigate("Board", { boardTitle: props.title })
          }
        />
      </Card.Actions>
    </Card>
  );
}

export default BoardComponent;
