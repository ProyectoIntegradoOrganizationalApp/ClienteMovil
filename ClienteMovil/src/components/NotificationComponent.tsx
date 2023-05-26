// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, IconButton, Card } from "react-native-paper";

// Estilos
import styles from "../styles/styles";

interface INotification {
  user: string;
  message: string;
  date: string;
}

function NotificationComponent(props: INotification) {
  //const navigation = useNavigation<any>();

  const { components } = styles();

  const isNotificationNew = true;
  return (
    <Card style={components.card}>
      <Card.Title
        title={props.message}
        subtitle={props.date}
        left={() => <Avatar.Image size={40} source={{ uri: props.user }} />}
        right={() =>
          isNotificationNew ? (
            <IconButton icon="circle" size={15} iconColor="red" />
          ) : (
            ""
          )
        }
      />
    </Card>
  );
}

export default NotificationComponent;
