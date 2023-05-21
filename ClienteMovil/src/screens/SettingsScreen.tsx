import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Switch } from "react-native-paper";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import ButtonComponent from "../components/ButtonComponent";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
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
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <ScrollView style={scriptStyles.generalView}>
      <View style={scriptStyles.viewRow}>
        <View style={{ flex: 2 }}>
          <Text style={scriptStyles.title}>Dark Mode</Text>
          <Text style={scriptStyles.text}>
            Active this to enable and disabled dark mode.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
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

  return (
    <ScrollView style={scriptStyles.generalView}>
      <View style={scriptStyles.viewRow}>
        <View style={{ flex: 2 }}>
          <Text style={scriptStyles.title}>Enable Notifications</Text>
          <Text style={scriptStyles.text}>
            Active this to enable and disabled notifications.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
      </View>
      <View style={scriptStyles.viewRow}>
        <View style={{ flex: 3 }}>
          <Text style={scriptStyles.title}>Profile Visibility</Text>
          <Text style={scriptStyles.text}>
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
        <Text style={scriptStyles.title}>Change Password</Text>
        <Text style={[scriptStyles.text, { marginBottom: 12 }]}>
          Change password to secure your account
        </Text>
        <TextInput
          placeholder="Old Password"
          placeholderTextColor={styles.colors.grey800}
          style={scriptStyles.input}
        ></TextInput>
        <TextInput
          placeholder="New Password"
          placeholderTextColor={styles.colors.grey800}
          style={scriptStyles.input}
        ></TextInput>
        <TextInput
          placeholder="Repeat Password"
          placeholderTextColor={styles.colors.grey800}
          style={scriptStyles.input}
        ></TextInput>
        <ButtonComponent type="primary" title="Change" size="small" />
      </View>
    </ScrollView>
  );
};

const scriptStyles = StyleSheet.create({
  generalView: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: "600",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    textAlign: "left",
  },
  viewRow: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    padding: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: styles.colors.grey500,
    backgroundColor: styles.colors.grey400,
  },
});

export default SettingsScreen;
