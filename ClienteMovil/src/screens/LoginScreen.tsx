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
import theme from "../utils/theme";

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
              <Text style={styles.text}>Password</Text>
              <LoginInputComponent name="password" />
              <View style={styles.viewButton}>
                <Button
                  title="Sign In"
                  color={theme.colors.grey800}
                  onPress={login}
                />
                <View style={styles.viewText}>
                  <Text onPress={() => navigation.navigate("Register")}>
                    You do not have an account? Sign up here
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
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 25,
  },
  view: {
    padding: 20,
    marginTop: 50,
  },
  viewButton: {
    margin: 20,
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

export default LoginScreen;
