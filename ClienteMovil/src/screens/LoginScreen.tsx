import { Button, Image, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-paper";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";

function login() {}

const initialValues = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.loginStyles.viewContainer}>
            <ScrollView contentContainerStyle={styles.loginStyles.scrollView}>
              <View style={styles.loginStyles.viewImage}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.loginStyles.image}
                />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputComponent name="email" label="Email" />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputPassComponent name="password" label="Password" />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <Button
                  title="Sign In"
                  onPress={login}
                  color={styles.colors.grey800}
                />
              </View>
              <Text
                style={styles.loginStyles.text}
                onPress={() => navigation.navigate("Register")}
              >
                You do not have an account? Register
              </Text>
              <Divider style={styles.loginStyles.divider}></Divider>
              <Text
                style={styles.loginStyles.text}
                onPress={() => navigation.navigate("RecoverPassword")}
              >
                Lost password?
              </Text>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;
