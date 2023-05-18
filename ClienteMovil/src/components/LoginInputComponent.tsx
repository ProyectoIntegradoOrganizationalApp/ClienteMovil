import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import styles from "../styles/styles";

interface LoginInputComponentProps {
  name: string;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

const LoginInputComponent: React.FC<LoginInputComponentProps> = ({
  name,
  label,
  value,
  onChangeText,
}) => {
  const [error, setError] = useState("");

  const handleInputChange = (text: string) => {
    onChangeText(text);
    setError("");
  };

  const validateInput = () => {
    if (value.length === 0) {
      setError("This field is required");
    } else {
      setError("");
    }
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
