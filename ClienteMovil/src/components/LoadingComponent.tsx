import { ActivityIndicator } from "react-native-paper";
import { StyleSheet } from "react-native";
import styles from "../styles/styles";

const LoadingComponent = ({ state }: { state: boolean }) => {
  const { colors } = styles();

  return (
    <ActivityIndicator
      animating={state}
      size={"large"}
      color={colors.grey500}
      style={scriptStyles.loader}
    />
  );
};

const scriptStyles = StyleSheet.create({
  loader: { zIndex: 10, top: 260 },
});

export default LoadingComponent;
