// React
import { useEffect, useState } from "react";

// Hooks
import { useFriendApi } from "../adapters/api/useFriendApi";

// Componentes
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const InviteMemberScreen = () => {
  const { fetchUsers } = useFriendApi(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      fetchUsers(searchQuery);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const onChangeSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = await fetchUsers(query);
      const formattedResults = results.map((user: any, index: string) => ({
        ...user,
        key: index.toString(),
      }));
      setSearchResults(formattedResults);
    } else {
      setSearchResults([]);
    }
  };

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
      <View style={{ flex: 1 }}>
        <FlatList
          data={searchResults}
          renderItem={({ item: user }) => (
            <FriendComponent type="invite" {...user} />
          )}
        />
      </View>
    </View>
  );
};

export default InviteMemberScreen;
