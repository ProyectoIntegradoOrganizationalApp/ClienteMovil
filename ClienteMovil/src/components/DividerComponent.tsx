// Componentes
import { View, Text } from "react-native";

// Estilos
import styles from "../styles/styles";

const DividerComponent = ({ content }: { content: string }) => {
  const { components } = styles();

  return (
    <View style={components.divider.container}>
      <View style={components.divider.subcontainer} />
      <View>
        <Text style={components.divider.text}>{content}</Text>
      </View>
      <View style={components.divider.subcontainer} />
    </View>
  );
};
export default DividerComponent;
