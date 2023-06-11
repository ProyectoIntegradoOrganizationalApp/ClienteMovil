// React
import { useEffect } from "react";

// Hooks
import { useNotificationApi } from "../adapters/api/useNotificationApi";

// Componentes
import { FlatList, View } from "react-native";
import NotificationComponent from "../components/NotificationComponent";
import LoadingComponent from "../components/LoadingComponent";

// Estilos
import styles from "../styles/styles";

const NotificationScreen = ({ navigation }: { navigation: any }) => {
  const {
    data: notifications,
    loading,
    refreshData,
  } = useNotificationApi(true);

  useEffect(() => {
    return navigation.addListener("focus", () => {
      refreshData();
    });
  }, [navigation]);

  const { screens } = styles();

  return (
    <View style={[screens.notifications.background, { flex: 1 }]}>
      {notifications ? (
        <FlatList
          data={Array.isArray(notifications) ? notifications : [notifications]}
          renderItem={({ item: org }) => <NotificationComponent {...org} />}
        />
      ) : (
        <LoadingComponent state={loading} />
      )}
    </View>
  );
};

export default NotificationScreen;
