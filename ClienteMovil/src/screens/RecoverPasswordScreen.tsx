// React
import { useState } from "react";

// Componentes
import { ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import ButtonComponent from "../components/ButtonComponent";

// Estilos
import styles from "../styles/styles";

const RecoverPasswordScreen = ({ navigation }: { navigation: any }) => {
  const { screens } = styles();

  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState("");

  const handleInputError = (error: string) => {
    setInputError(error);
  };

  const sendForm = (event: SubmitEvent | any) => {
    event.preventDefault();
    if (inputError.length === 0) {
      navigation.navigate("NewPassword"); // TODO
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        screens.accountManagement.scrollView,
        { height: "100%" },
      ]}
    >
      <View style={screens.accountManagement.viewContainer}>
        <View style={screens.accountManagement.viewContainerChild}>
          <Text style={screens.accountManagement.textTitle}>
            Recovery Password
          </Text>
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <Text style={screens.accountManagement.textsubTitle}>
            No worries, we'll send you reset instructions
          </Text>
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <LoginInputComponent
            name="email"
            label="Enter your email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            onError={handleInputError}
          />
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <ButtonComponent title="Recovery Password" onPress={sendForm} />
        </View>
        <ButtonComponent
          title="Back To Log In"
          type="secondary"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
};

export default RecoverPasswordScreen;
