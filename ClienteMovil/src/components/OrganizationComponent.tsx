import { useNavigation } from "@react-navigation/native";
import { Avatar, Card, IconButton } from "react-native-paper";

interface IOrganization {
  title: string;
  subtitle: string;
}

function OrganizationComponent(props: IOrganization) {
  const navigation = useNavigation<any>();
  return (
    <Card>
      <Card.Title
        title={props.title}
        subtitle={props.subtitle}
        left={() => <Avatar.Text size={40} label={props.title.charAt(0)} />}
        right={() => (
          <IconButton
            icon="chevron-right"
            onPress={() =>
              navigation.navigate("Organization", {
                organizationTitle: props.title,
              })
            }
          />
        )}
      />
    </Card>
  );
}

export default OrganizationComponent;
