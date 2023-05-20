import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@env";

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
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlMmFjZjBhMy0xZTM5LTQ1ZjAtOGI5Ni1hMWU1MTIyY2VkYTMiLCJyb2xlIjoidXNlciIsImV4cCI6MTY4NDYxNDU5MX0.aAUC4CcPjmf1gWvVgQhGka1Yy9aVWVTNMf4rhsofBkV_QbdZ2X2ckCQ6ugB4IC3tJu3bPCepRr1dhB7cVoJEYg",
    };
    try {
      const response = await axios.get<Achievement[]>(
        `${API_URL}/achievements`,
        { headers }
      );
      setAchievements(response.data);
    } catch (error) {
      console.error("Error al cargar logros: " + error);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return { achievements };
};

export default useAchievements;
