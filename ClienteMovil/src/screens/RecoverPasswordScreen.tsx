import { Button, Image, ScrollView, Text, View } from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";

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
              <View style={styles.loginStyles.viewImage}>
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.loginStyles.image}
                />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.text}>
                  Provide your account's email for which you want to reset your
                  password
                </Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputComponent name="email" label="Email" />
              </View>
              <Button
                title="Send Email"
                onPress={() => navigation.navigate("NewPassword")}
                color={styles.colors.grey800}
              />
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default RecoverPasswordScreen;
