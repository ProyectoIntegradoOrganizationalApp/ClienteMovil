import { Image, ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";
import ButtonComponent from "../components/ButtonComponent";
import DividerComponent from "../components/DividerComponent";

function register() {}

const initialValues = {
  email: "",
  user: "",
  password: "",
  passwordConfirm: "",
};

const RegisterScreen = ({ navigation }: { navigation: any }) => {
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
                <LoginInputPassComponent
                  name="passwordConfirm"
                  label="Repeat password"
                />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <ButtonComponent title="Sign Up" onPress={register} />
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
                onPress={() => navigation.navigate("Login")}
              >
                Already have an account? Login
              </Text>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default RegisterScreen;
