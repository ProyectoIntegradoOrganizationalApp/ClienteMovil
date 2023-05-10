import { useRef } from "react";
import { Avatar } from "react-native-paper";
import {
  Animated,
  Button,
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
      icon = <Avatar.Icon icon="check-circle" color="#6dcf81" size={24} />;
      break;
    case "error":
      icon = <Avatar.Icon icon="close-circle" color="#bf6060" size={24} />;
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
    <View>
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{ translateY: popAnim }],
          },
        ]}
      >
        <View style={styles.toastRow}>
          {icon}
          <View style={styles.toastText}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>{title}</Text>
            <Text style={{ fontSize: 12 }}>{message}</Text>
          </View>
          <TouchableOpacity onPress={instantPopOut}>
            <Avatar.Icon icon="close" color="#000000" size={24} />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Button
        title="Success Message"
        onPress={() => {
          popIn();
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    height: 60,
    width: 350,
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
  },
});

export default PopupNotificationComponent;
