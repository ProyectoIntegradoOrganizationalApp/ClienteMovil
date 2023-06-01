// React
import { useEffect, useState } from "react";

// Hooks
import useProfile from "../hooks/useProfile";

// Componentes
import { Avatar, Card } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import { ApplicationProvider, Calendar } from "@ui-kitten/components";
import { mapping } from "@eva-design/eva";

// Hooks
import { useUtils } from "../hooks/useUtils";

// Estilos
import styles from "../styles/styles";

const ActivityScreen = () => {
  const [daily, setDaily] = useState<number>(0);
  const [weekly, setWeekly] = useState<number>(0);

  const data = useProfile();

  useEffect(() => {
    if (data?.profile?.activity) {
      const getUserWork = useUtils(data.profile?.activity);
      const { commitsDaily, commitsWeekly } = getUserWork.getUserWork();

      setDaily(commitsDaily);
      setWeekly(commitsWeekly);
    }
  }, [data?.profile?.user.id]);

  const [date, setDate] = useState(new Date());

  const { colors, components, screens } = styles();

  return (
    <ScrollView style={screens.activity.background}>
      <Card style={components.card}>
        <Card.Title
          title="Finished Tasks this Week"
          titleStyle={{ color: colors.text }}
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={components.icons.taskIcon}
            />
          )}
          right={() => (
            <Text style={components.activityIndicator.text}>{weekly}</Text>
          )}
        />
      </Card>
      <Card style={components.card}>
        <Card.Title
          title="Finished Tasks this Day"
          titleStyle={{ color: colors.text }}
          left={() => (
            <Avatar.Icon
              icon="xml"
              size={45}
              style={components.icons.taskIcon}
            />
          )}
          right={() => (
            <Text style={components.activityIndicator.text}>{daily}</Text>
          )}
        />
      </Card>
      <Card style={[components.card, { marginBottom: 15 }]}>
        <Card.Content>
          <ApplicationProvider
            mapping={mapping}
            theme={components.calendar.theme}
          >
            <Calendar
              date={date}
              onSelect={(nextDate) => setDate(nextDate)}
              style={components.calendar}
            />
          </ApplicationProvider>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default ActivityScreen;
