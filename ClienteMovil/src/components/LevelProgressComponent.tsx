// Componentes
import { View } from "react-native";
import { Svg, Circle, Text } from "react-native-svg";

// Estilos
import styles from "../styles/styles";

interface LevelProgressComponentProps {
  level: number | undefined;
  progress: number;
  radius: number;
  strokeWidth: number;
}

const LevelProgressComponent: React.FC<LevelProgressComponentProps> = ({
  level,
  progress,
  radius,
  strokeWidth,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progressValue = (progress / 100) * circumference;

  const { colors } = styles();

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#033e30"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#089f7b"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${progressValue}, ${circumference}`}
          strokeDashoffset={0}
        />
        <Text
          x="50%"
          y="40%"
          textAnchor="middle"
          fontSize={radius / 2.75}
          fill={colors.text}
        >
          LEVEL
        </Text>
        <Text
          x="50%"
          y="70%"
          textAnchor="middle"
          fontSize={radius / 2}
          fill={colors.text}
        >
          {level}
        </Text>
      </Svg>
    </View>
  );
};

export default LevelProgressComponent;
