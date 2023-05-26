// React
import React from "react";

// Componentes
import { Avatar, Card } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import { Calendar } from "@ui-kitten/components";

// Estilos
import styles from "../styles/styles";

const ActivityScreen = () => {
  const [date, setDate] = React.useState(new Date());

  const { components } = styles();

  return (
    <ScrollView>
      <Card style={components.card}>
        <Card.Title
          title="Finished Tasks this Week"
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={components.icons.taskIcon}
            />
          )}
          right={() => (
            <Text style={components.activityIndicator.text}>15</Text>
          )}
        />
      </Card>
      <Card style={components.card}>
        <Card.Title
          title="Finished Tasks this Day"
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={components.icons.taskIcon}
            />
          )}
          right={() => <Text style={components.activityIndicator.text}>2</Text>}
        />
      </Card>
      <Card style={[components.card, { marginBottom: 15 }]}>
        <Card.Content>
          <Calendar
            date={date}
            onSelect={(nextDate) => setDate(nextDate)}
            style={components.calendar}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default ActivityScreen;
