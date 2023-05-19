import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import styles from "../styles/styles";
import { loginValidationSchema } from "../utils/loginValidationSchema";

interface LoginInputComponentProps {
  name: string;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onError: (error: string) => void;
}

const LoginInputComponent: React.FC<LoginInputComponentProps> = ({
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

  const validateInput = () => {
    // TODO: Implement validate
    let errorMessage = "";
    if (value.length === 0) {
      errorMessage = "This field is required";
    } else {
      switch (name) {
        case "email":
          if (value.length <= 10) {
            errorMessage = "Invalid format";
          }
          break;
      }
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
      />
      {error !== "" && <HelperText type="error">{error}</HelperText>}
    </>
  );
};

export default LoginInputComponent;
