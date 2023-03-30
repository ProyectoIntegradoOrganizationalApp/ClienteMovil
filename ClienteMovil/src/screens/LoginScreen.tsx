import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function login() {}

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri: "https://picsum.photos/777",
            }}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Usuario:
        </Text>
        <TextInput placeholder="Introduzca su usuario" style={styles.input} />
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Contraseña:
        </Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Introduzca su contraseña"
          style={styles.input}
        />
        <View style={styles.button}>
          <Button title="Iniciar sesión" onPress={login} />
          <View
            style={{
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text onPress={() => navigation.navigate("Register")}>
              ¿No tienes cuenta? Registrate aquí
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    margin: 20,
  },
});

export default LoginScreen;
