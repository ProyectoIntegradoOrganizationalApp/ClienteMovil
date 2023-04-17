import { Button, Image, ScrollView, Text, View } from "react-native";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";

function newPassword() {}

const initialValues = {
  password: "",
  passwordConfirm: "",
};

const NewPasswordScreen = ({ navigation }: { navigation: any }) => {
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
                  Your identity has been verified. Set your new password
                </Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputPassComponent name="password" label="Password" />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputPassComponent
                  name="passwordConfirm"
                  label="Confirm password"
                />
              </View>
              <Button
                title="Update Password"
                onPress={newPassword}
                color={styles.colors.grey800}
              />
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default NewPasswordScreen;
