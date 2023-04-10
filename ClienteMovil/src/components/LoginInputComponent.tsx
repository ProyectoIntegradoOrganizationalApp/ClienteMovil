import { useField } from "formik";
import StyledTextInputComponent from "./StyledTextInputComponent";
import { StyleSheet } from "react-native";

const LoginInputComponent = ({ name, ...props }: { name: any }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInputComponent
        error={meta.error}
        value={field.value}
        onChangeText={(value: any) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && (
        <StyledTextInputComponent style={styles.error}>
          {meta.error}
        </StyledTextInputComponent>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: 5,
  },
});

export default LoginInputComponent;
