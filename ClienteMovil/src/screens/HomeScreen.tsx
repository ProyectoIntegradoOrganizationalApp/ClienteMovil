import { FlatList, Text, View } from "react-native";
import OrganizationComponent from "../components/OrganizationComponent";

const organizations = [
  {
    id: "1",
    title: "Organización 1",
    subtitle: "Descripción",
  },
  {
    id: "2",
    title: "Organización 2",
    subtitle: "Descripción",
  },
  {
    id: "3",
    title: "Organización 3",
    subtitle: "Descripción",
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
