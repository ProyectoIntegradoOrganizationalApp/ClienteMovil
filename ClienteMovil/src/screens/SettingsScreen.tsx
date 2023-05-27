// React
import React, { useContext } from "react";

// Contexto
import {
  ThemeContext,
  ThemeContextProps,
} from "../domain/context/ThemeContext";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Componentes
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Switch } from "react-native-paper";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import ButtonComponent from "../components/ButtonComponent";
import { ScrollView, Text, TextInput, View } from "react-native";
import ModalConfirmComponent from "../components/ModalConfirmComponent";

// Estilos
import styles from "../styles/styles";

const Tab = createMaterialTopTabNavigator();

const SettingsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="GeneralSettings"
        options={{ title: "General" }}
        component={GeneralSettingsScreen}
      />
      <Tab.Screen
        name="SecuritySettings"
        options={{ title: "Security" }}
        component={SecuritySettingsScreen}
      />
    </Tab.Navigator>
  );
};

const GeneralSettingsScreen = () => {
  const { theme, setTheme } = useContext<ThemeContextProps>(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    console.log(theme);
  };

  const [modalConfirmVisible, setModalConfirmVisible] = React.useState(false);
  const handleModalConfirmState = (e: boolean) => {
    setModalConfirmVisible(e);
  };

  const { logout } = useAuth();

  const { screens } = styles();

  return (
    <ScrollView style={screens.settings.generalView}>
      <View style={screens.settings.viewRow}>
        <View style={{ flex: 2 }}>
          <Text style={screens.settings.title}>Dark Mode</Text>
          <Text style={screens.settings.text}>
            Active this to enable and disabled dark mode.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch value={theme === "dark"} onValueChange={toggleTheme} />
        </View>
      </View>
      <View style={screens.settings.viewRow}>
        <ButtonComponent
          type="primary"
          title="Log out"
          size="small"
          onPress={() => {
            setModalConfirmVisible(true);
          }}
        />
      </View>
      <ModalConfirmComponent
        message={
          <Text style={{ fontSize: 16 }}>
            Are you sure you want to log out of Teamer?
          </Text>
        }
        confirmText="Confirm"
        dimissText="Cancel"
        isVisible={modalConfirmVisible}
        setModalConfirmVisible={handleModalConfirmState}
        onConfirm={() => {
          logout();
        }}
      />
    </ScrollView>
  );
};

const SecuritySettingsScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const visibilityOptions = ["None", "Friends Only", "All"];
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0)
  );

  const { colors, screens } = styles();

  return (
    <ScrollView style={screens.settings.generalView}>
      <View style={screens.settings.viewRow}>
        <View style={{ flex: 2 }}>
          <Text style={screens.settings.title}>Enable Notifications</Text>
          <Text style={screens.settings.text}>
            Active this to enable and disabled notifications.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={screens.settings.viewRow}>
        <View style={{ flex: 3 }}>
          <Text style={screens.settings.title}>Profile Visibility</Text>
          <Text style={screens.settings.text}>
            Whetever users can see your profile or not.
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Select
            value={visibilityOptions[selectedIndex.row]}
            selectedIndex={selectedIndex}
            onSelect={(index: any) => setSelectedIndex(index)}
          >
            {visibilityOptions.map(
              (title: string, index: number): React.ReactElement => (
                <SelectItem key={index.toString() + 1} title={title} />
              )
            )}
          </Select>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
        <Text style={screens.settings.title}>Change Password</Text>
        <Text style={[screens.settings.text, { marginBottom: 12 }]}>
          Change password to secure your account
        </Text>
        <TextInput
          placeholder="Old Password"
          placeholderTextColor={colors.grey800}
          style={screens.settings.input}
        ></TextInput>
        <TextInput
          placeholder="New Password"
          placeholderTextColor={colors.grey800}
          style={screens.settings.input}
        ></TextInput>
        <TextInput
          placeholder="Repeat Password"
          placeholderTextColor={colors.grey800}
          style={screens.settings.input}
        ></TextInput>
        <ButtonComponent type="primary" title="Change" size="small" />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
