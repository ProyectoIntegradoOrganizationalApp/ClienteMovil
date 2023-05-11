import { useRef } from "react";
import { IconButton } from "react-native-paper";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const PopupNotificationComponent = (props: any) => {
  const { type, title, message } = props;
  const windowHeight = Dimensions.get("window").height;
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;

  let icon;
  switch (type) {
    case "success":
      icon = (
        <IconButton
          icon="check-circle"
          iconColor="#6dcf81"
          size={35}
          style={scriptStyles.toastIcon}
        />
      );
      break;
    case "error":
      icon = (
        <IconButton
          icon="close-circle"
          iconColor="#bf6060"
          size={35}
          style={scriptStyles.toastIcon}
        />
      );
      break;
  }

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.35 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut);
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * -1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        scriptStyles.toastContainer,
        {
          transform: [{ translateY: popAnim }],
        },
      ]}
    >
      <View style={scriptStyles.toastRow}>
        {icon}
        <View style={scriptStyles.toastText}>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            {title}
          </Text>
          <Text style={{ fontSize: 15 }}>{message}</Text>
        </View>
        <TouchableOpacity
          style={{ marginBottom: 20, marginLeft: 15 }}
          onPress={instantPopOut}
        >
          <IconButton
            icon="close"
            iconColor="#000000"
            size={20}
            style={scriptStyles.toastIcon}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const scriptStyles = StyleSheet.create({
  toastContainer: {
    height: 80,
    width: 350,
    marginLeft: 22,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toastRow: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  toastText: {
    width: "70%",
    padding: 2,
    marginLeft: 20,
  },
  toastIcon: {
    backgroundColor: "transparent",
  },
});

export default PopupNotificationComponent;
