// React
import { useEffect, useState } from "react";

// Hooks
import { useFriendApi } from "../adapters/api/useFriendApi";

// Componentes
import {
  ApplicationProvider,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";
import { IconButton, Searchbar } from "react-native-paper";
import { FlatList, Text, View } from "react-native";
import FriendComponent from "../components/FriendComponent";

// Estilos
import styles from "../styles/styles";

const orders = ["All", "Online", "Blocked"];

const FriendsListScreen = ({ navigation }: { navigation: any }) => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  );

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
    <>
      <View style={[screens.friendsList.background, { flex: 1 }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton
            icon="account-multiple-plus"
            size={20}
            iconColor="#fff"
            style={components.icons.addUserIcon}
            onPress={() => navigation.navigate("AddFriend")}
          />
        </View>
        <View style={components.filter.filterView}>
          <Text style={components.filter.filterText}>Order by:</Text>
          <ApplicationProvider
            mapping={mapping}
            theme={components.filter.filterSelectTheme}
          >
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
          </ApplicationProvider>
        </View>
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
            renderItem={({ item: chat }) => (
              <FriendComponent type="chat" {...chat} />
            )}
          />
        </View>
      </View>
    </>
  );
};

export default FriendsListScreen;
