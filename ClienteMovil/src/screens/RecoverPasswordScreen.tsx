import { ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";
import ButtonComponent from "../components/ButtonComponent";

function recoverPassword() {}

const initialValues = {
  email: "",
};

const RecoverPasswordScreen = ({ navigation }: { navigation: any }) => {
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
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.textTitle}>
                  Recovery Password
                </Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.textsubTitle}>
                  No worries, we'll send you reset instructions
                </Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputComponent name="email" label="Enter your email" />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <ButtonComponent
                  title="Recovery Password"
                  onPress={() => navigation.navigate("NewPassword")}
                />
              </View>
              <ButtonComponent
                title="Back To Log In"
                type="secondary"
                onPress={() => navigation.navigate("Login")}
              />
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default RecoverPasswordScreen;
