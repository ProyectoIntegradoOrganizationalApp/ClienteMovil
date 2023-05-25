import { Image, TouchableHighlight, StyleSheet, Text } from "react-native";
import styles from "../styles/styles";

function ButtonComponent(props: any) {
  const { title, type = "primary", size = "normal", onPress } = props;

  const { components } = styles();

  let buttonContent = <Text style={components.button.text}>{title}</Text>;
  let buttonType;
  switch (type) {
    case "primary":
      buttonType = components.button.buttonPrimary;
      break;
    case "secondary":
      buttonType = components.button.buttonSecondary;
      break;
    case "google":
      buttonContent = (
        <Image source={require("../assets/images/icon-google.png")} />
      );
      buttonType = components.button.buttonGoogle;
      break;
    case "github":
      buttonContent = (
        <Image source={require("../assets/images/icon-github.png")} />
      );
      buttonType = components.button.buttonGithub;
      break;
    case "confirm":
      buttonType = components.button.buttonConfirm;
      break;
  }

  let buttonSize =
    size === "small"
      ? components.button.buttonSmallSize
      : components.button.buttonNormalSize;

  return (
    <TouchableHighlight
      style={[components.button.button, buttonType, buttonSize]}
      onPress={onPress}
    >
      {buttonContent}
    </TouchableHighlight>
  );
}

export default ButtonComponent;
