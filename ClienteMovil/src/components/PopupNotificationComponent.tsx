// Componentes
import Toast from "react-native-toast-message";

const PopupNotificationComponent = (
  type: string,
  title: string,
  message: string | undefined
) => {
  Toast.show({
    type: type,
    text1: title,
    text2: message,
    position: "top",
  });
};

export default PopupNotificationComponent;
