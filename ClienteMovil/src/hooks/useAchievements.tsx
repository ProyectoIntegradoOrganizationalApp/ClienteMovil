import { useEffect, useState } from "react";
import axios from "axios";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  progess: number;
}

const useAchievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  const fetchAchievements = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlMmFjZjBhMy0xZTM5LTQ1ZjAtOGI5Ni1hMWU1MTIyY2VkYTMiLCJyb2xlIjoidXNlciIsImV4cCI6MTY4NDM0Njg4OH0.t8gEYLpypSJ7QQQAc3DYjU-A4l0vJNbKW6i--x3V_1hYDSKta8qgDW8QVulYVcgymLcFgxapu3n_gquM8kXp4Q",
    };
    try {
      const response = await axios.get<Achievement[]>(
        "http://192.168.56.1:8000/achievements",
        { headers }
      );
      setAchievements(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return { achievements };
};

export default useAchievements;
