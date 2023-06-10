// Interfaces
import { Notification } from "../domain/notification/Notification.interface";

// Componentes
import { Card } from "react-native-paper";

// Estilos
import styles from "../styles/styles";

function NotificationComponent(props: Notification) {
  //const navigation = useNavigation<any>();

  const { colors, components } = styles();

  return (
    <Card style={components.card}>
      <Card.Title
        title={props.title}
        titleStyle={{ color: colors.text }}
        subtitle={props.message}
        subtitleStyle={{ color: colors.text }}
      />
    </Card>
  );
}

export default NotificationComponent;
