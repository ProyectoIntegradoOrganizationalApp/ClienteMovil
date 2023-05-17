import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useApi } from "../api/useApi";
import LoadingComponent from "../components/LoadingComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import ButtonComponent from "../components/ButtonComponent";
import DividerComponent from "../components/DividerComponent";
import styles from "../styles/styles";
import axios from "axios";

const LoginScreen = ({ navigation }: { navigation: any }) => {
  /*const { user } = useContext(AuthContext);

  if (user) {
    return navigation.navigate("");
  }*/

  const { loading, fetchUser } = useApi();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { email, password };
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      //'Authorization': 'Bearer ',
    };
    console.log(data);
    try {
      const response = await axios.post(
        "http://192.168.56.1:8000/login",
        data,
        { headers }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = () => {
    handleLogin();
  };

  return (
    <>
      <LoadingComponent state={loading} />

      <ScrollView contentContainerStyle={styles.loginStyles.scrollView}>
        <View style={styles.loginStyles.viewContainer}>
          <View style={styles.loginStyles.viewImage}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.loginStyles.image}
            />
          </View>
          <View style={styles.loginStyles.viewContainerChild}>
            <TextInput
              placeholder="Enter email"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.loginStyles.viewContainerChild}>
            <TextInput
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.loginStyles.viewContainerChild}>
            <Text
              style={styles.loginStyles.text}
              onPress={() => navigation.navigate("RecoverPassword")}
            >
              Recovery password
            </Text>
          </View>
          <View style={styles.loginStyles.viewContainerChild}>
            <ButtonComponent title="Log In" onPress={handleFormSubmit} />
          </View>
          <View style={styles.loginStyles.viewContainerChild}>
            <DividerComponent content="or" />
          </View>
          <View style={styles.loginStyles.viewContainerChild}>
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
            style={styles.loginStyles.text}
            onPress={() => navigation.navigate("Register")}
          >
            New Here?{" "}
            <Text style={{ color: styles.colors.grey800 }}>Sign up</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
