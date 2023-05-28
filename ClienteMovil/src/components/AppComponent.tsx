// Componentes
import { useNavigation } from "@react-navigation/native";
import { Avatar, Card } from "react-native-paper";
import { Text, View } from "react-native";

// Estilos
import styles from "../styles/styles";

interface IApp {
  icon: string;
  name: string;
  description: string;
  installed: boolean;
  added: boolean;
  premium: boolean;
}

function isAppPremium(premium: boolean) {
  const { components } = styles();

  if (premium) {
    return (
      <Avatar.Icon
        icon="crown"
        color="#ec9d27"
        size={30}
        style={components.icons.crownIcon}
      />
    );
  }
}

function AppComponent(props: IApp) {
  const navigation = useNavigation<any>();

  const { colors, components } = styles();

  let componentOptions: JSX.Element;
  if (!props.installed) {
    componentOptions = (
      <Avatar.Icon
        icon="basket"
        color="#fff"
        size={30}
        style={[
          components.icons.basketIcon,
          { marginLeft: 10, marginRight: 15 },
        ]}
      />
    );
  } else {
    if (props.added) {
      componentOptions = (
        <Avatar.Icon
          icon="delete"
          color="#fff"
          size={30}
          style={components.icons.deleteIcon}
        />
      );
    } else {
      componentOptions = (
        <Avatar.Icon
          icon="plus"
          color="#fff"
          size={30}
          style={components.icons.addIcon}
        />
      );
    }
  }

  return (
    <Card style={components.card}>
      <Card.Title
        title={
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: colors.text }}>{props.name}</Text>
            {isAppPremium(props.premium)}
          </View>
        }
        subtitle={props.description}
        subtitleStyle={{ color: colors.text }}
        left={() => <Avatar.Image size={40} source={{ uri: props.icon }} />}
        right={() => (
          <View style={{ flexDirection: "row" }}>
            <Avatar.Icon
              icon="eye"
              color="#fff"
              size={30}
              style={components.icons.eyeIcon}
            />
            {componentOptions}
          </View>
        )}
      />
    </Card>
  );
}

export default AppComponent;
