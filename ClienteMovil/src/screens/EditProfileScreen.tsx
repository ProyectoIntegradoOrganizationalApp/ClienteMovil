// React
import { useState } from "react";

// Hooks
import { useAuth } from "../hooks/useAuth";
import { useProfileApi } from "../adapters/api/useProfileApi";

// Componentes
import { TextInput, View } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import PopupNotificationComponent from "../components/PopupNotificationComponent";

// Estilos
import styles from "../styles/styles";

const EditProfileScreen = ({ navigation }: { navigation: any }) => {
  const { colors, screens } = styles();

  const { editProfile } = useProfileApi();

  const { user } = useAuth();

  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const handlePress = () => {
    editProfile(newName, newLastName);

    PopupNotificationComponent(
      "success",
      "Profile Edited",
      "Your profile was edited"
    );

    navigation.goBack();
  };

  return (
    <View style={[screens.editProfile.view, { flex: 1 }]}>
      <TextInput
        placeholder="Name"
        placeholderTextColor={colors.primary}
        defaultValue={user?.name}
        onChangeText={(text) => setNewName(text)}
        style={screens.editProfile.input}
      ></TextInput>
      <TextInput
        placeholder="Last name"
        placeholderTextColor={colors.primary}
        defaultValue={user?.lastname}
        onChangeText={(text) => setNewLastName(text)}
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
