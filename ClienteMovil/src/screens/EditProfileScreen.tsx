// React
import { useContext, useEffect, useState } from "react";

// Contexto
import { AuthContext } from "../context/AuthContext";
import { ThemeContext, ThemeContextProps } from "../context/ThemeContext";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const EditProfileScreen = ({ navigation }: { navigation: any }) => {
  const { colors, screens } = styles();

  const handlePress = () => {
    PopupNotificationComponent(
      "success",
      "Profile Edited",
      "Your profile was edited"
    );
  };

  const { user } = useAuth();

  return (
    <View style={[screens.editProfile.view, { flex: 1 }]}>
      <TextInput
        placeholder="Name"
        placeholderTextColor={colors.primary}
        defaultValue={user?.name}
        style={screens.editProfile.input}
      ></TextInput>
      <TextInput
        placeholder="Last name"
        placeholderTextColor={colors.primary}
        defaultValue={user?.lastname}
        style={screens.editProfile.input}
      ></TextInput>
      <View style={screens.editProfile.viewRow}>
        <ButtonComponent
          type="secondary"
          title="Cancel"
          size="small"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <ButtonComponent
          type="primary"
          title="Confirm"
          size="small"
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;
