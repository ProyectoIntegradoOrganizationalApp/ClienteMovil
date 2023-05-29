// Componentes
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

// Estilos
import styles from "../styles/styles";

// TODO: Code file

const BoardsSingleScreen = () => {
  const { colors } = styles();

  return (
    <View
      style={[scriptStyles.container, { backgroundColor: colors.background }]}
    >
      <Text variant="headlineMedium" style={{ color: colors.text }}>
        Projects Settings Screen
      </Text>
    </View>
  );
};

const scriptStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BoardsSingleScreen;
