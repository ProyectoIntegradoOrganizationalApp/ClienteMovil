// React
import { useContext, useEffect, useState } from "react";

// Contexto
import { AuthContext } from "../context/AuthContext";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";

// Hooks
import { useUserApi } from "../adapters/api/useUserApi";
import { useAuth } from "../hooks/useAuth";

// Componentes
import { User } from "../domain/user/User.interface";
import { UserMapper } from "../adapters/mappers/User/UserMapper";
import LoadingComponent from "../components/LoadingComponent";
import { Image, ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import ButtonComponent from "../components/ButtonComponent";
import DividerComponent from "../components/DividerComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const { components, screens } = styles();

  const { user } = useContext(AuthContext);

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");

  const { data, error, loading, fetchUser } = useUserApi();

  useEffect(() => {
    if (!error?.error && data && "_token" in data && !user) {
      const user: User = UserMapper.prototype.mapTo(data);
      login(user);
    }
  }, [data?.id]);

  useEffect(() => {
    if (error && error.message != "") {
      console.error(error.message);
      PopupNotificationComponent("error", "Error", error.message);
    }
  }, [error?.message]);

  const handleInputError = (error: string) => {
    setInputError(error);
  };

  const sendForm = (event: SubmitEvent | any) => {
    event.preventDefault();
    if (inputError.length === 0) {
      fetchUser({ email, password });
    }
  };

  const { theme } = useContext<ThemeContextProps>(ThemeContext);

  return (
    <ScrollView
      contentContainerStyle={[
        screens.accountManagement.scrollView,
        { height: "100%" },
      ]}
    >
      <LoadingComponent state={loading} />
      <View style={screens.accountManagement.viewContainer}>
        <View style={screens.accountManagement.viewImage}>
          <Image
            source={
              theme === "light"
                ? require("../assets/images/logo-light.png")
                : require("../assets/images/logo-dark.png")
            }
            style={screens.accountManagement.image}
          />
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <LoginInputComponent
            name="email"
            label="Enter email"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
            onError={handleInputError}
          />
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
          <Text
            style={screens.accountManagement.text}
            onPress={() => navigation.navigate("RecoverPassword")}
          >
            Recovery password
          </Text>
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <ButtonComponent title="Log In" onPress={sendForm} />
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
          <DividerComponent content="or" />
        </View>
        <View style={screens.accountManagement.viewContainerChild}>
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
          style={screens.accountManagement.text}
          onPress={() => navigation.navigate("Register")}
        >
          New Here? <Text style={components.link}>Sign up</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
