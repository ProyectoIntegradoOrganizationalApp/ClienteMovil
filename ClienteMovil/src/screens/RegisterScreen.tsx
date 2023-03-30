import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function register() {}

const RegisterScreen = ({ navigation }: { navigation: any }) => {
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
          E-Mail:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Introduzca su e-mail"
          keyboardType="email-address"
        />
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Usuario:
        </Text>
        <TextInput style={styles.input} placeholder="Introduzca su usuario" />
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Contraseña:
        </Text>
        <TextInput
          // secureTextEntry={true}
          style={styles.input}
          placeholder="Introduzca su contraseña"
        />
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Repetir contraseña:
        </Text>
        <TextInput
          // secureTextEntry={true}
          style={styles.input}
          placeholder="Introduzca su contraseña de nuevo"
        />
        <View style={styles.button}>
          <Button title="Registrarse" onPress={register} />
          <View
            style={{
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text onPress={() => navigation.navigate("Login")}>
              ¿Ya tienes cuenta? Inicia sesión aquí
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

export default RegisterScreen;
