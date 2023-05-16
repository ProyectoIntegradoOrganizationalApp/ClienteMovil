import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useApi } from "../api/useApi";
import LoadingComponent from "../components/LoadingComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import { Image, ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import ButtonComponent from "../components/ButtonComponent";
import DividerComponent from "../components/DividerComponent";
import styles from "../styles/styles";

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }: { navigation: any }) => {
  /*const { user } = useContext(AuthContext);

  if (user) {
    return navigation.navigate("");
  }*/

  const { loading, fetchUser } = useApi();

  const handleLogin = async (email: string, password: string) => {
    await fetchUser({ email, password });
  };

  return (
    <>
      <LoadingComponent state={loading} />
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={(values) => {
          handleLogin(values.email, values.password);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <ScrollView contentContainerStyle={styles.loginStyles.scrollView}>
              <View style={styles.loginStyles.viewContainer}>
                <View style={styles.loginStyles.viewImage}>
                  <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.loginStyles.image}
                  />
                </View>
                <View style={styles.loginStyles.viewContainerChild}>
                  <LoginInputComponent name="email" label="Enter email" />
                </View>
                <View style={styles.loginStyles.viewContainerChild}>
                  <LoginInputPassComponent
                    name="password"
                    label="Enter password"
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
                  <ButtonComponent title="Log In" onPress={handleSubmit} />
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
          );
        }}
      </Formik>
    </>
  );
};

export default LoginScreen;
