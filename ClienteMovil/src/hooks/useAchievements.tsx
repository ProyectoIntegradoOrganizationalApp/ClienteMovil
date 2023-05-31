import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { API_URL } from "@env";

interface AchievementI {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  progress: number;
  completed: boolean;
}

interface AchievementListResponse {
  achievements: AchievementI[];
  total: number;
}

interface AchievementUserResponse {
  achievements: AchievementUserI[];
  total: number;
}

interface AchievementUserI {
  idachievement: string;
  iduser: string;
  progress: number;
  completed: boolean;
}

const useAchievements = () => {
  const { user } = useContext(AuthContext);
  const [achievements, setAchievements] = useState<AchievementI[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?._token}`,
        };

        const responseList = await axios.get<AchievementListResponse>(
          `${API_URL}/achievements`,
          { headers }
        );
        const responseUser = await axios.get<AchievementUserResponse>(
          `${API_URL}/profile/${user?.id}/achievements`,
          { headers }
        );

        const achievementsList = responseList.data.achievements;
        const achievementsUser = responseUser.data.achievements;

        const combinedAchievements: AchievementI[] = achievementsList?.map(
          (achievement) => {
            const userAchievement = achievementsUser?.find(
              (userAchievement) =>
                userAchievement.idachievement === achievement.id
            );

            return {
              ...achievement,
              progress: userAchievement?.progress || 0,
              completed: userAchievement?.completed || false,
            };
          }
        );

        setAchievements(combinedAchievements);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAchievements();
  }, [user]);

  return { achievements };
};

export default useAchievements;
