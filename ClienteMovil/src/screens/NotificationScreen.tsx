// Hooks
import { useUser } from "../hooks/useUser";

// Componentes
import { FlatList, View } from "react-native";
import NotificationComponent from "../components/NotificationComponent";

// Estilos
import styles from "../styles/styles";

const notifications = [
  {
    idUser: "1",
    idGuest: "3",
    title: "Task added",
    message: "Pepe Pepín add a task",
  },
  {
    idUser: "2",
    idGuest: "3",
    title: "Task updated",
    message: "Juan Juanete update a task",
  },
  {
    idUser: "3",
    idGuest: "3",
    title: "Task deleted",
    message: "Manolo Manolín delete a task",
  },
];

const NotificationScreen = () => {
  const { user } = useUser();

  const { screens } = styles();

  return (
    <View style={[screens.notifications.background, { flex: 1 }]}>
      <FlatList
        data={notifications}
        renderItem={({ item: org }) => <NotificationComponent {...org} />}
      />
    </View>
  );
};

export default NotificationScreen;
