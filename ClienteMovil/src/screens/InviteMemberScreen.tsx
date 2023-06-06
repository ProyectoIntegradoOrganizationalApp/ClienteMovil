// React
import { useState } from "react";

// Hooks
import { useUser } from "../hooks/useUser";

// Componentes
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const friends = [
  {
    id: "1",
    photo: "https://picsum.photos/163",
    name: "Pepe Pepín",
  },
  {
    id: "2",
    photo: "https://picsum.photos/490",
    name: "Juan Juanete",
  },
  {
    id: "3",
    photo: "https://picsum.photos/501",
    name: "Manolo Manolín",
  },
];

const InviteMemberScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: any) => setSearchQuery(query);

  const { user } = useUser();

  const { colors, components, screens } = styles();

  return (
    <View style={[screens.addFriends.background, { flex: 1 }]}>
      <Searchbar
        placeholder="Search friends..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        iconColor={colors.text}
        cursorColor={colors.text}
        placeholderTextColor={colors.text}
        style={components.searchbar.searchbar}
        theme={{
          colors: { onSurfaceVariant: colors.text },
        }}
      />
      {
        // * When search: <FriendComponent type="invite" {...request} />
      }
    </View>
  );
};

export default InviteMemberScreen;
