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

  const { colors, components } = styles();

  return (
    <Card style={components.board.board}>
      <Card.Cover source={{ uri: props.cover }} />
      <Card.Actions>
        <Text variant="titleLarge" style={{ color: colors.text }}>
          {props.title}
        </Text>
        <IconButton
          icon="chevron-right"
          iconColor={colors.text}
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
