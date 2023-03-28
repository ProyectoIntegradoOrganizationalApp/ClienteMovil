import { Avatar, Card, IconButton } from "react-native-paper";

interface IOrganization {
  title: string;
  subtitle: string;
}

const OrganizationComponent = (
  props: IOrganization,
  { navigation }: { navigation: any }
) => (
  <Card>
    <Card.Title
      title={props.title}
      subtitle={props.subtitle}
      left={() => <Avatar.Text size={40} label={props.title.charAt(0)} />}
      right={() => (
        <IconButton
          icon="chevron-right"
          onPress={() => navigation.navigate("Organization")}
        />
      )}
    />
  </Card>
);

export default OrganizationComponent;
