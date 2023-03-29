import { Button, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Login Screen</Text>
      <Button
        title={`Go to Register`}
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
