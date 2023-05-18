import { ActivityIndicator } from "react-native-paper";
import styles from "../styles/styles";

const LoadingComponent = ({ state }: { state: boolean }) => {
  return <ActivityIndicator animating={state} color={styles.colors.grey500} />;
};

export default LoadingComponent;
