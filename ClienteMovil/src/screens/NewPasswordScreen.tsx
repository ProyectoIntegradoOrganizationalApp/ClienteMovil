// React
import { useEffect, useState } from "react";

// Hooks
import { useChangePassword } from "../hooks/useChangePassword";

// Componentes
import LoadingComponent from "../components/LoadingComponent";
import { Keyboard, ScrollView, Text, View } from "react-native";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const NewPasswordScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { screens } = styles();

  const [password, setPassword] = useState<string>("");
  const [confirmpass, setConfirmPass] = useState<string>("");
  const [inputError, setInputError] = useState("");

  const { data, error, loading, changePassword } = useChangePassword();

  const { email } = route.params;

  useEffect(() => {
    if (!error?.error && data) {
      navigation.navigate("Login");
    }
  }, [data?.id]);

  useEffect(() => {
    if (error && error.message != "") {
      PopupNotificationComponent("error", "Error", error.message);
    }
  }, [error?.message]);

  const handleInputError = (error: string) => {
    setInputError(error);
  };

  const sendForm = (event: SubmitEvent | any) => {
    event.preventDefault();
    Keyboard.dismiss();
    if (password.length <= 0 || confirmpass.length <= 0) {
      PopupNotificationComponent("error", "Error", "Please fill in the fields");
    } else {
      if (inputError.length === 0) {
        if (password === confirmpass) {
          changePassword({ email, password, confirmpass });
        } else {
          PopupNotificationComponent(
            "error",
            "Error",
            "Your passwords do not match"
          );
        }
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        screens.accountManagement.scrollView,
        { height: "100%" },
      ]}
    >
      <LoadingComponent state={loading} />
      <View style={screens.accountManagement.viewContainer}>
        <View style={screens.accountManagement.viewContainerChild}>
          <Text style={screens.accountManagement.textTitle}>
            Change Password
          </Text>
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <Text style={screens.accountManagement.textsubTitle}>
            Create a strong and unique password to protect your information
          </Text>
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <LoginInputPassComponent
            name="password"
            label="Enter password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
            onError={handleInputError}
          />
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <LoginInputPassComponent
            name="confirmpass"
            label="Repeat password"
            value={confirmpass}
            onChangeText={(text: string) => setConfirmPass(text)}
            onError={handleInputError}
          />
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <ButtonComponent title="Change Password" onPress={sendForm} />
        </View>
        <ButtonComponent
          title="Cancel"
          type="secondary"
          onPress={() => navigation.navigate("RecoverPassword")}
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
