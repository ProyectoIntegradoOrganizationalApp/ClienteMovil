// React
import { useState } from "react";

// Componentes
import { ScrollView, Text, View } from "react-native";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const NewPasswordScreen = ({ navigation }: { navigation: any }) => {
  const { loginStyles } = styles();

  const [password, setPassword] = useState<string>("");
  const [confirmpass, setConfirmPass] = useState<string>("");
  const [inputError, setInputError] = useState("");

  const handleInputError = (error: string) => {
    setInputError(error);
  };

  const sendForm = (event: SubmitEvent | any) => {
    event.preventDefault();
    if (inputError.length === 0) {
      if (password === confirmpass) {
        // TODO:
      } else {
        PopupNotificationComponent(
          "error",
          "Error",
          "Your passwords do not match"
        );
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={loginStyles.scrollView}>
      <View style={loginStyles.viewContainerChild}>
        <Text style={loginStyles.textTitle}>Change Password</Text>
      </View>
      <View style={loginStyles.viewContainerChild}>
        <Text style={loginStyles.textsubTitle}>
          Create a strong and unique password to protect your information
        </Text>
      </View>
      <View style={loginStyles.viewContainerChild}>
        <LoginInputPassComponent
          name="password"
          label="Enter password"
          value={password}
          onChangeText={(text: string) => setPassword(text)}
          onError={handleInputError}
        />
      </View>
      <View style={loginStyles.viewContainerChild}>
        <LoginInputPassComponent
          name="confirmpass"
          label="Repeat password"
          value={confirmpass}
          onChangeText={(text: string) => setConfirmPass(text)}
          onError={handleInputError}
        />
      </View>
      <View style={loginStyles.viewContainerChild}>
        <ButtonComponent title="Change Password" onPress={sendForm} />
      </View>
      <ButtonComponent
        title="Cancel"
        type="secondary"
        onPress={() => navigation.navigate("RecoverPassword")}
      />
    </ScrollView>
  );
};

export default NewPasswordScreen;
