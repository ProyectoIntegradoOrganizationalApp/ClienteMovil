import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LoginInputComponent from "../components/LoginInputComponent";
import { Formik } from "formik";
import { loginValidationSchema } from "../utils/loginValidationSchema";

function register() {}

const initialValues = {
  email: "",
  password: "",
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
          <View style={styles.view}>
            <ScrollView>
              <View style={styles.viewImage}>
                <Image
                  source={{
                    uri: "https://picsum.photos/777",
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Email</Text>
              <LoginInputComponent name="email" />
              <Text style={styles.text}>User</Text>
              <LoginInputComponent name="user" />
              <Text style={styles.text}>Password</Text>
              <LoginInputComponent name="password" secureTextEntry />
              <Text style={styles.text}>Confirm password</Text>
              <LoginInputComponent name="passwordConfirm" secureTextEntry />
              <View style={styles.button}>
                <Button title="Sign Up" onPress={register} />
                <View style={styles.viewText}>
                  <Text onPress={() => navigation.navigate("Login")}>
                    Already have an account? Sign in here
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 25,
  },
  view: {
    padding: 20,
    marginTop: 50,
  },
  viewImage: {
    alignItems: "center",
    marginBottom: 20,
  },
  viewText: {
    alignItems: "center",
    marginTop: 15,
  },
});

export default RegisterScreen;
