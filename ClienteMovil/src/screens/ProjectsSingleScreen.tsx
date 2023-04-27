import { FlatList, View } from "react-native";
import BoardComponent from "../components/BoardComponent";

const boards = [
  {
    id: "1",
    title: "Tablero 1",
    cover: "https://picsum.photos/600",
  },
  {
    id: "2",
    title: "Tablero 2",
    cover: "https://picsum.photos/700",
  },
  {
    id: "3",
    title: "Tablero 3",
    cover: "https://picsum.photos/800",
  },
];

const ProjectsSingleScreen = () => {
  return (
    <View>
      <FlatList
        data={boards}
        renderItem={({ item: board }) => <BoardComponent {...board} />}
      />
    </View>
  );
};

export default ProjectsSingleScreen;
