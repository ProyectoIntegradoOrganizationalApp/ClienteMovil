import { useNavigation } from "@react-navigation/native";
import { Avatar, IconButton, Card } from "react-native-paper";
import { StyleSheet } from "react-native";

interface INotification {
  user: string;
  message: string;
  date: string;
}

function NotificationComponent(props: INotification) {
  //const navigation = useNavigation<any>();
  const isNotificationNew = true;
  return (
    <Card style={styles.notification}>
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

const styles = StyleSheet.create({
  notification: {
    borderRadius: 0,
  },
});

export default NotificationComponent;
