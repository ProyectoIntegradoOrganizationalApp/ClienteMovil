import { ScrollView, Text, View } from "react-native";
import LoginInputPassComponent from "../components/LoginInputPassComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";
import ButtonComponent from "../components/ButtonComponent";

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
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.textTitle}>
                  Change Password
                </Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <Text style={styles.loginStyles.textsubTitle}>
                  Create a strong and unique password to protect your
                  information
                </Text>
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputPassComponent name="password" label="Password" />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <LoginInputPassComponent
                  name="passwordConfirm"
                  label="Repeat password"
                />
              </View>
              <View style={styles.loginStyles.viewContainerChild}>
                <ButtonComponent
                  title="Change Password"
                  onPress={newPassword}
                />
              </View>
              <ButtonComponent
                title="Cancel"
                type="secondary"
                onPress={() => navigation.navigate("RecoverPassword")}
              />
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

export default NewPasswordScreen;
