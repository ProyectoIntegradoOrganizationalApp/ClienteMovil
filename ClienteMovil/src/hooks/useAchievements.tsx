import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../domain/context/AuthContext";
import axios from "axios";
import { API_URL } from "@env";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  progress: number;
}

const useAchievements = () => {
  const { user } = useContext(AuthContext);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?._token}`,
        };

        const responseList = await axios.get<Achievement[]>(
          `${API_URL}/achievements`,
          { headers }
        );
        const responseUser = await axios.get<any[]>(
          `${API_URL}/profile/${user?.id}/achievements`,
          { headers }
        );

        const achievementsList = responseList.data;
        const achievementsUser = responseUser.data;

        const combinedAchievements: any = {};

        Object.keys(achievementsList).forEach((key) => {
          combinedAchievements[key] = achievementsList[key];
        });

        Object.keys(achievementsUser).forEach((key) => {
          if (key !== "idachievement") {
            combinedAchievements[key] = achievementsUser[key];
          }
        });

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
