import { useState } from "react";

import axios from "axios";

import { ApiError } from "../domain/ApiError.interface";
import { UserDTO } from "../domain/user/UserDTO.interface";

import { API_URL } from "@env";

interface FormProps {
  email: string;
  password: string;
  confirmpass: string;
}

export const useChangePassword = () => {
  const [data, setData] = useState<UserDTO>();
  const [error, setError] = useState<ApiError>();
  const [loading, setLoading] = useState<boolean>(false);

  const changePassword = (props: FormProps) => {
    setLoading(true);

    const body = JSON.stringify({
      mail: props.email,
      pass: props.password,
      confirm_pass: props.confirmpass,
    });

    axios
      .post<UserDTO | ApiError>(`${API_URL}/change_password`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        handleData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      setLoading(false);
    };
  };

  const handleData = (data: UserDTO | ApiError) => {
    setError({ error: false, message: "" });
    if (data && "error" in data) {
      if (data.error) {
        setError(data);
      }
    }
    if (data) {
      setData(data as UserDTO);
    }
    setLoading(false);
  };

  return { data, error, loading, changePassword };
};
