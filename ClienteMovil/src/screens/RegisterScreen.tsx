// React
import { useContext, useEffect, useState } from "react";

// Contexto
import { AuthContext } from "../domain/context/AuthContext";

// Hooks
import { useUserApi } from "../adapters/api/useUserApi";
import { useAuth } from "../hooks/useAuth";

// Componentes
import { User } from "../domain/user/User.interface";
import { UserMapper } from "../adapters/mappers/UserMapper";
import LoadingComponent from "../components/LoadingComponent";
import { Image, ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import ButtonComponent from "../components/ButtonComponent";
import DividerComponent from "../components/DividerComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const { colors, loginStyles } = styles();

  const { user } = useContext(AuthContext);

  const { login } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [prefix, setPrefix] = useState<string>("+34");
  const [phone_number, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpass, setConfirmPass] = useState<string>("");
  const [inputError, setInputError] = useState("");

  const { data, error, loading, registerUser } = useUserApi();

  useEffect(() => {
    if (!error?.error && data && "_token" in data && !user) {
      const user: User = UserMapper.prototype.mapTo(data);
      login(user);
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
    if (inputError.length === 0) {
      if (password === confirmpass) {
        registerUser({
          name,
          last_name,
          prefix,
          phone_number,
          email,
          password,
        });
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
      <LoadingComponent state={loading} />
      <View style={loginStyles.viewContainer}>
        <View style={loginStyles.viewImage}>
          <Image
            source={require("../assets/images/logo.png")}
            style={loginStyles.image}
          />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <LoginInputComponent
            name="name"
            label="Enter name"
            value={name}
            onChangeText={(text: string) => setName(text)}
            onError={handleInputError}
          />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <LoginInputComponent
            name="last_name"
            label="Enter last name"
            value={last_name}
            onChangeText={(text: string) => setLastName(text)}
            onError={handleInputError}
          />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <LoginInputComponent
            name="prefix"
            label="Enter prefix"
            value={prefix}
            onChangeText={(text: string) => setPrefix(text)}
            onError={handleInputError}
          />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <LoginInputComponent
            name="phone_number"
            label="Enter phone"
            value={phone_number}
            onChangeText={(text: string) => setPhoneNumber(text)}
            onError={handleInputError}
          />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <LoginInputComponent
            name="email"
            label="Enter email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            onError={handleInputError}
          />
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
          <ButtonComponent title="Sign Up" onPress={sendForm} />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <DividerComponent content="or" />
        </View>
        <View style={loginStyles.viewContainerChild}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 5 }}>
              <ButtonComponent type="google" />
            </View>
            <View style={{ flex: 1 }}>
              <></>
            </View>
            <View style={{ flex: 5 }}>
              <ButtonComponent type="github" />
            </View>
          </View>
        </View>
        <Text
          style={loginStyles.text}
          onPress={() => navigation.navigate("Login")}
        >
          Registered? <Text style={{ color: colors.grey800 }}>Log in</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;
