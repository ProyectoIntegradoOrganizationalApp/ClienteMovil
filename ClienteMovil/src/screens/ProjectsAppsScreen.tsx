// React
import React from "react";

// Componentes
import { FlatList, Text, View } from "react-native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import AppComponent from "../components/AppComponent";

// Estilos
import styles from "../styles/styles";

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

const orders = ["Recently", "Older", "Alphabetical"];

const ProjectsAppsScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0)
  );

  const { components } = styles();

  return (
    <View>
      <View style={components.filter.filterView}>
        <Text style={components.filter.filterText}>Order by:</Text>
        <Select
          value={orders[selectedIndex.row]}
          selectedIndex={selectedIndex}
          onSelect={(index: any) => setSelectedIndex(index)}
          style={components.filter.filterSelect}
        >
          {orders.map(
            (title: string, index: number): React.ReactElement => (
              <SelectItem key={index.toString()} title={title} />
            )
          )}
        </Select>
      </View>
      <FlatList
        data={apps}
        renderItem={({ item: app }) => <AppComponent {...app} />}
      />
    </View>
  );
};

export default ProjectsAppsScreen;
