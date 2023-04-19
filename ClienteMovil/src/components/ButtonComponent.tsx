import { Pressable, StyleSheet, Text } from "react-native";
import customStyles from "../styles/styles";

function LoginButtonComponent(props: any) {
  const { title, type = "primary", onPress } = props;
  return (
    <Pressable
      style={[
        styles.button,
        type == "primary" ? styles.buttonPrimary : styles.buttonSecondary,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 0,
    elevation: 3,
  },
  buttonPrimary: {
    backgroundColor: customStyles.colors.grey800,
  },
  buttonSecondary: {
    backgroundColor: customStyles.colors.grey500,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LoginButtonComponent;
