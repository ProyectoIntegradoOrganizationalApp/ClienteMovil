import { FlatList, Text, View } from "react-native";
import OrganizationComponent from "../components/OrganizationComponent";

const organizations = [
  {
    id: "1",
    title: "Título 1",
    subtitle: "Subtítulo 1",
  },
  {
    id: "2",
    title: "Título 2",
    subtitle: "Subtítulo 2",
  },
  {
    id: "3",
    title: "Título 3",
    subtitle: "Subtítulo 3",
  },
];

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={organizations}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: org }) => <OrganizationComponent {...org} />}
      />
    </View>
  );
};

export default HomeScreen;
