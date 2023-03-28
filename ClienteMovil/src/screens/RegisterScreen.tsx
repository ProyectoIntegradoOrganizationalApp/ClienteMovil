import { Button, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Register Screen</Text>
      <Button
        title={`Go to Login`}
        onPress={() => navigation.navigate("Login")}
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

export default RegisterScreen;
