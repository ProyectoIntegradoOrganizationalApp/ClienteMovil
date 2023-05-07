import React, { useRef } from "react";
import { Avatar } from "react-native-paper";
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const pageWidth = Dimensions.get("window").width;

class PopupNotificationComponent {
  type: string;
  title: string;
  message: string;

  modalShown: boolean;
  animatedValue: Animated.Value;

  constructor(type: string, title: string, message: string) {
    this.type = type;
    this.title = title;
    this.message = message;

    this.modalShown = false;
    this.animatedValue = useRef(new Animated.Value(0.0)).current;
  }

  callToast() {
    if (this.modalShown) return;
    this.setNotificationType(this.type);
    this.modalShown = true;
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start(this.closeToast);
  }

  closeToast() {
    setTimeout(() => {
      this.modalShown = false;
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true,
      }).start();
    }, 2000);
  }

  setNotificationType(type: string) {
    let icon;
    switch (type) {
      case "success":
        icon = (
          <Avatar.Icon
            icon="check-circle"
            color="#6dcf81"
            size={30}
            style={styles.avatarIcon}
          />
        );
        break;
      case "error":
        icon = (
          <Avatar.Icon
            icon="close-circle"
            color="#bf6060"
            size={30}
            style={styles.avatarIcon}
          />
        );
        break;
    }
    return icon;
  }

  render() {
    let animation = this.animatedValue.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [-70, -10, 0],
    });

    return (
      <Animated.View
        style={[
          styles.toastContainer,
          {
            transform: [{ translateY: animation }],
          },
        ]}
      >
        <View style={styles.toastRow}>
          {this.setNotificationType(this.type)}
          <View style={styles.toastText}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              {this.title}
            </Text>
            <Text style={{ fontSize: 12 }}>{this.message}</Text>
          </View>
          <TouchableOpacity onPress={this.closeToast}>
            <Avatar.Icon
              icon="close"
              color="#000000"
              size={30}
              style={styles.avatarIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
}

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
    width: pageWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  toastText: {
    width: "70%",
    padding: 2,
  },
  avatarIcon: {
    backgroundColor: "transparent",
  },
});

export default PopupNotificationComponent;
