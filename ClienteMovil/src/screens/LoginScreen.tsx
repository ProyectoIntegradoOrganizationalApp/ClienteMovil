import { Image, ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";
import ButtonComponent from "../components/ButtonComponent";
import DividerComponent from "../components/DividerComponent";

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
                <ButtonComponent title="Log In" onPress={login} />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <DividerComponent content="or" />
              </View>
              <Text
                style={styles.loginStyles.text}
                onPress={() => navigation.navigate("Register")}
              >
                You do not have an account? Register
              </Text>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;
