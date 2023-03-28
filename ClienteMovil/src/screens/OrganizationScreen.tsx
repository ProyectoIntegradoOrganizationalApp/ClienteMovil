import { FlatList, Text, View } from "react-native";
import BoardComponent from "../components/BoardComponent";

const boards = [
  {
    id: "1",
    title: "Título 1",
    cover: "https://picsum.photos/600",
  },
  {
    id: "2",
    title: "Título 2",
    cover: "https://picsum.photos/700",
  },
  {
    id: "3",
    title: "Título 3",
    cover: "https://picsum.photos/800",
  },
];

const OrganizationScreen = () => {
  return (
    <View>
      <FlatList
        data={boards}
        ItemSeparatorComponent={() => <Text></Text>}
        renderItem={({ item: board }) => <BoardComponent {...board} />}
      />
    </View>
  );
};

export default OrganizationScreen;
