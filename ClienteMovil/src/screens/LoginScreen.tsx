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
                <ButtonComponent title="Log In" onPress={login} />
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
            {/*<View style={styles.loginStyles.viewNavigateContainer}>
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.textTitle}>New Here?</Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.textsubTitle}>
                  Sign up and discover a great amount of new opportunities!
                </Text>
              </View>
              <ButtonComponent
                title="Sign up"
                onPress={() => navigation.navigate("Register")}
              />
        </View>*/}
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;
