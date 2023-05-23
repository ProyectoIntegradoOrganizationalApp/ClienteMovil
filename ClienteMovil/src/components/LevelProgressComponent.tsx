import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Svg, Circle, Text as SVGText } from "react-native-svg";

interface LevelProgressComponentProps {
  level: number | undefined;
  progress: number;
  radius: number;
  strokeWidth: number;
  barColor: string;
  textColor: string;
}

const LevelProgressComponent: React.FC<LevelProgressComponentProps> = ({
  level,
  progress,
  radius,
  strokeWidth,
  barColor,
  textColor,
}) => {
  const circumference = 2 * Math.PI * radius;
  const progressValue = (progress / 100) * circumference;

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={barColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="rgba(0, 0, 0, 0.55)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={`${progressValue}, ${circumference}`}
          strokeDashoffset={0}
        />
        <SVGText
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={radius / 2.5}
          fill={textColor}
        >
          {`${level}`}
        </SVGText>
      </Svg>
    </View>
  );
};

export default LevelProgressComponent;
