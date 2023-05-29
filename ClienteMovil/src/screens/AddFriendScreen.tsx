// Componentes
import { FlatList, View } from "react-native";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const friends = [
  {
    id: "1",
    profile: "https://picsum.photos/163",
    user: "Pepe Pepín",
    status: "Deja de leer mi estado",
  },
  {
    id: "2",
    profile: "https://picsum.photos/490",
    user: "Juan Juanete",
    status: "Vive sin límites",
  },
  {
    id: "3",
    profile: "https://picsum.photos/501",
    user: "Manolo Manolín",
    status: "El interior es lo que cuesta",
  },
];

const AddFriendScreen = () => {
  const { screens } = styles();

  return (
    <View style={[screens.addFriends.background, { flex: 1 }]}>
      <FlatList
        data={friends}
        renderItem={({ item: request }) => (
          <FriendComponent type="add" {...request} />
        )}
      />
    </View>
  );
};

export default AddFriendScreen;
