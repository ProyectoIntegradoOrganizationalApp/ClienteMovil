import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import { loginValidationSchema } from "../utils/loginValidationSchema";
import styles from "../styles/styles";

interface LoginInputPassComponentProps {
  name: string;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onError: (error: string) => void;
}

const LoginInputPassComponent: React.FC<LoginInputPassComponentProps> = ({
  name,
  label,
  value,
  onChangeText,
  onError,
}) => {
  const [error, setError] = useState("");

  const handleInputChange = (text: string) => {
    onChangeText(text);
    setError("");
    onError("");
  };

  const validateInput = async () => {
    let errorMessage = "";
    try {
      await loginValidationSchema.validateAt(name, { [name]: value });
    } catch (error: any) {
      errorMessage = error.message;
    }
    setError(errorMessage);
    onError(errorMessage);
  };

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        error={error !== ""}
        value={value}
        onChangeText={handleInputChange}
        onBlur={validateInput}
        activeOutlineColor={styles.colors.grey800}
        outlineColor={styles.colors.grey800}
        secureTextEntry
      />
      {error !== "" && <HelperText type="error">{error}</HelperText>}
    </>
  );
};

export default LoginInputPassComponent;
