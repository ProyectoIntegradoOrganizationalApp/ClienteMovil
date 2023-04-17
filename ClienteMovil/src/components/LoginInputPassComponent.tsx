import { useState } from "react";
import { useField } from "formik";
import { HelperText, TextInput } from "react-native-paper";
import styles from "../styles/styles";

const LoginInputPassComponent = ({
  name,
  label,
  ...props
}: {
  name: any;
  label: any;
}) => {
  const [field, meta, helpers] = useField(name);
  const [hidePass, setHidePass] = useState(true);
  const [password, setPassword] = useState("");
  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        error={meta.error != undefined}
        value={field.value}
        onChangeText={(value: any) => helpers.setValue(value)}
        secureTextEntry={hidePass ? true : false}
        activeOutlineColor={styles.colors.grey800}
        outlineColor={styles.colors.grey800}
        right={
          <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
        }
        {...props}
      />
      {meta.error && <HelperText type="error">{meta.error}</HelperText>}
    </>
  );
};

export default LoginInputPassComponent;
