import React, { useContext } from "react";
import {
  ThemeContext,
  ThemeContextProps,
} from "../domain/context/ThemeContext";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Switch } from "react-native-paper";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import ButtonComponent from "../components/ButtonComponent";
import { ScrollView, Text, TextInput, View } from "react-native";
import ModalConfirmComponent from "../components/ModalConfirmComponent";
import { useAuth } from "../hooks/useAuth";
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

  const { settingsStyles } = styles();

  return (
    <ScrollView style={settingsStyles.generalView}>
      <View style={settingsStyles.viewRow}>
        <View style={{ flex: 2 }}>
          <Text style={settingsStyles.title}>Dark Mode</Text>
          <Text style={settingsStyles.text}>
            Active this to enable and disabled dark mode.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch value={theme === "light"} onValueChange={toggleTheme} />
        </View>
      </View>
      <View style={settingsStyles.viewRow}>
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

  const { colors, settingsStyles } = styles();

  return (
    <ScrollView style={settingsStyles.generalView}>
      <View style={settingsStyles.viewRow}>
        <View style={{ flex: 2 }}>
          <Text style={settingsStyles.title}>Enable Notifications</Text>
          <Text style={settingsStyles.text}>
            Active this to enable and disabled notifications.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={settingsStyles.viewRow}>
        <View style={{ flex: 3 }}>
          <Text style={settingsStyles.title}>Profile Visibility</Text>
          <Text style={settingsStyles.text}>
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
        <Text style={settingsStyles.title}>Change Password</Text>
        <Text style={[settingsStyles.text, { marginBottom: 12 }]}>
          Change password to secure your account
        </Text>
        <TextInput
          placeholder="Old Password"
          placeholderTextColor={colors.grey800}
          style={settingsStyles.input}
        ></TextInput>
        <TextInput
          placeholder="New Password"
          placeholderTextColor={colors.grey800}
          style={settingsStyles.input}
        ></TextInput>
        <TextInput
          placeholder="Repeat Password"
          placeholderTextColor={colors.grey800}
          style={settingsStyles.input}
        ></TextInput>
        <ButtonComponent type="primary" title="Change" size="small" />
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
