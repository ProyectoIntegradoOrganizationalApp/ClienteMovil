import { useState } from "react";

import axios from "axios";

import { ApiError } from "../../domain/ApiError.interface";
import { Register } from "./Register.interface";
import { useErrorHandler } from "../../hooks/useErrorHandler";
import { UserDTO } from "../../domain/user/UserDTO";
import { API_URL } from "@env";

interface FormProps {
  name?: string;
  last_name?: string;
  phone_number?: string;
  email: string;
  password: string;
}

export const useUserApi = () => {
  const [data, setData] = useState<UserDTO | null>(null);
  const [error, setError] = useState<ApiError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const API = API_URL;

  const { setInternalError } = useErrorHandler();

  const fetchUser = async (props: FormProps) => {
    setLoading(true);

    const body = JSON.stringify({
      email: props.email,
      password: props.password,
    });

    try {
      const response = await axios.post<UserDTO | ApiError>(
        `${API}/login`,
        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        handleData(response.data);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const registerUser = async (props: FormProps) => {
    setLoading(true);

    if (!props.name || !props.last_name) {
      setLoading(false);
      return;
    }

    const body = JSON.stringify({
      email: props.email,
      phone: props.phone_number,
      first_name: props.name,
      last_name: props.last_name,
      password: props.password,
    });

    try {
      const response = await axios.post<Register | ApiError>(
        `${API}/register`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        handleData(response.data, props);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const handleData = (
    data: UserDTO | Register | ApiError,
    props?: FormProps
  ) => {
    // Limpiamos errores
    setError(null);

    if ("error" in data) {
      // Error
      if (data.error) {
        setError(data);
      }

      // Register
      if (!data.error) {
        fetchUser({ email: props!.email, password: props!.password });
      }
    }

    if ("id" in data) {
      setData(data as UserDTO);
    }
  };

  return { data, error, loading, fetchUser, registerUser };
};
