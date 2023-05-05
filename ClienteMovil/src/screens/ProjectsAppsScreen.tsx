import { FlatList, StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import AppComponent from "../components/AppComponent copy";

const apps = [
  {
    id: "1",
    icon: "https://picsum.photos/268",
    name: "Taskman",
    description: "Work Managment",
    installed: true,
    added: false,
    premium: false,
  },
  {
    id: "2",
    icon: "https://picsum.photos/193",
    name: "Yesse",
    description: "Music",
    installed: false,
    added: false,
    premium: true,
  },
  {
    id: "3",
    icon: "https://picsum.photos/343",
    name: "Engroup",
    description: "Friends Groups",
    installed: false,
    added: false,
    premium: true,
  },
  {
    id: "4",
    icon: "https://picsum.photos/444",
    name: "Pinsave",
    description: "Save Remote Projects",
    installed: false,
    added: false,
    premium: true,
  },
  {
    id: "5",
    icon: "https://picsum.photos/777",
    name: "BNP",
    description: "Financial Advisor",
    installed: false,
    added: false,
    premium: true,
  },
];

const ProjectsAppsScreen = () => {
  return (
    <View>
      {
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text>Order by:</Text>
          <SelectDropdown
            data={["Recently", "Older", "Alphabetical"]}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
          />
        </View>
      }
      <FlatList
        data={apps}
        renderItem={({ item: app }) => <AppComponent {...app} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProjectsAppsScreen;
