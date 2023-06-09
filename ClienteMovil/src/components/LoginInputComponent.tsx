// React
import React, { useState } from "react";

// Componentes
import { HelperText, TextInput } from "react-native-paper";

// Utils
import { loginValidationSchema } from "../utils/loginValidationSchema";

// Estilos
import styles from "../styles/styles";

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

  const { colors, components } = styles();

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        error={error !== ""}
        value={value}
        onChangeText={handleInputChange}
        onBlur={validateInput}
        activeOutlineColor={colors.primary}
        outlineColor={colors.primary}
        textColor={colors.text}
        style={components.input}
        theme={{
          colors: { onSurfaceVariant: colors.primary },
        }}
      />
      {error !== "" && <HelperText type="error">{error}</HelperText>}
    </>
  );
};

export default LoginInputComponent;
