// Componentes
import { ActivityIndicator } from "react-native-paper";

// Estilos
import styles from "../styles/styles";

const LoadingComponent = ({ state }: { state: boolean }) => {
  const { colors } = styles();

  return (
    <ActivityIndicator
      animating={state}
      size={"large"}
      color={colors.loader}
      style={{ zIndex: 10, top: 260 }}
    />
  );
};

export default LoadingComponent;
