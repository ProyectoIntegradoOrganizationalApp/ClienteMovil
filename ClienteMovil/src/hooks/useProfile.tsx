// React
import { useEffect, useContext, useState } from "react";

// Interface
import { Profile } from "../domain/profile/Profile.interface";

// Contexto
import { AuthContext } from "../context/AuthContext";

// Componentes
import axios from "axios";
import { API_URL } from "@env";

const useProfile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const headers = {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?._token}`,
        };

        const response = await axios.get<Profile>(
          `${API_URL}/profile/${user?.id}`,
          { headers }
        );

        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  return { profile };
};

export default useProfile;
