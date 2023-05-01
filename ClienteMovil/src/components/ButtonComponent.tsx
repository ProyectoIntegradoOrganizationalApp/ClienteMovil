import { Image, Pressable, StyleSheet, Text } from "react-native";
import customStyles from "../styles/styles";

function ButtonComponent(props: any) {
  const { title, type = "primary", onPress } = props;
  let buttonContent = <Text style={styles.text}>{title}</Text>;
  let buttonType;
  switch (type) {
    case "primary":
      buttonType = styles.buttonPrimary;
      break;
    case "secondary":
      buttonType = styles.buttonSecondary;
      break;
    case "google":
      buttonContent = (
        <Image source={require("../assets/images/icon-google.png")} />
      );
      buttonType = styles.buttonGoogle;
      break;
    case "github":
      buttonContent = (
        <Image source={require("../assets/images/icon-github.png")} />
      );
      buttonType = styles.buttonGithub;
      break;
    case "confirm":
      buttonType = styles.buttonConfirm;
      break;
  }
  return (
    <Pressable style={[styles.button, buttonType]} onPress={onPress}>
      {buttonContent}
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
  buttonGoogle: {
    height: 48,
    backgroundColor: "#ffffff",
  },
  buttonGithub: {
    height: 48,
    backgroundColor: "#1b1f23",
  },
  buttonConfirm: {
    backgroundColor: "#008f39",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
});

export default ButtonComponent;
