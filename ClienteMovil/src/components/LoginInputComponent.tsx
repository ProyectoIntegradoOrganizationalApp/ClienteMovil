import { useField } from "formik";
import { HelperText, TextInput } from "react-native-paper";
import styles from "../styles/styles";

const LoginInputComponent = ({
  name,
  label,
  ...props
}: {
  name: any;
  label: any;
}) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        error={meta.error != undefined}
        value={field.value}
        onChangeText={(value: any) => helpers.setValue(value)}
        secureTextEntry={field.name.includes("password")}
        activeOutlineColor={styles.colors.grey800}
        outlineColor={styles.colors.grey800}
        {...props}
      />
      {meta.error && <HelperText type="error">{meta.error}</HelperText>}
    </>
  );
};

export default LoginInputComponent;
