// Hooks
import { useUser } from "../hooks/useUser";

// Componentes
import { FlatList, View } from "react-native";
import NotificationComponent from "../components/NotificationComponent";

// Estilos
import styles from "../styles/styles";

const notifications = [
  {
    id: "1",
    user: "https://picsum.photos/163",
    message: "Pepe Pepín añadió una tarea",
    date: "28 Marzo 2023 a las 16:13",
  },
  {
    id: "2",
    user: "https://picsum.photos/490",
    message: "Juan Juanete editó una tarea",
    date: "01 Abril 2023 a las 20:36",
  },
  {
    id: "3",
    user: "https://picsum.photos/501",
    message: "Manolo Manolín borró una tarea",
    date: "15 Abril 2023 a las 10:00",
  },
];

const NotificationScreen = () => {
  const { user } = useUser();

  const { screens } = styles();

  return (
    <View style={[screens.notifications.background, { flex: 1 }]}>
      <FlatList
        data={user?.notifications}
        renderItem={({ item: org }) => <NotificationComponent {...org} />}
      />
    </View>
  );
};

export default NotificationScreen;
