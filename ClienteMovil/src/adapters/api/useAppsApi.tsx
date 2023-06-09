import { useState } from "react";
import { useAxios } from "./useAxios";
import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";

import { RequestParams } from "../../domain/RequestParams.interface";
import { App } from "../../domain/apps/App.interface";
import { ApiError } from "../../domain/ApiError.interface";
import { AppMapper } from "../mappers/AppMapper";
import { AppDTO } from "../../domain/apps/AppDTO.interface";

import { API_URL } from "@env";

/**
 * Hook para la conexión con los endpoints del back-end que se
 * encargan de hacer las peticiones sobre proyectos.
 */
export const useAppsApi = () => {
  const { user } = useAuth();

  const [data, setData] = useState<Array<App> | App>();
  const [error, setError] = useState<ApiError>();
  const [loading, setLoading] = useState<boolean>(false);

  const API = API_URL;

  /**
   *  Función que fetchea los datos de los proyectos, se debe de llamar desde un
   *  efecto, para que el objeto de usuario ya haya cargado.
   */
  const fetchData = (idproject: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/project/${idproject}/apps`,
      method: "GET",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
    };

    useAxios(props)
      .then((data) => handleData(data.data))
      .catch((err) => {
        handleData({ error: true, message: err });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createApp = (idproject: string, name: string, description: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/project/${idproject}/app`,
      method: "POST",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
      data: {
        name: name,
        description: description,
        photo: "https://www.svgrepo.com/show/513474/rocket.svg",
      },
    };

    /**
     *  Petición usando el Hook de Axios
     */
    useAxios(props)
      //.then((data) => console.log(data))
      .catch((err) => {
        const error: ApiError = { error: true, message: err };
        handleData(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const editApp = (
    idproject: string,
    newName: string,
    newDescription: string,
    id: string
  ) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/project/${idproject}/app/${id}`,
      method: "PUT",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
      data: {
        ...(newName.length > 0 && { name: newName }),
        ...(newDescription.length > 0 && { description: newDescription }),
      },
    };

    /**
     *  Petición usando el Hook de Axios
     */
    useAxios(props)
      .catch((err) => {
        const error: ApiError = { error: true, message: err };
        handleData(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteApp = (idproject: string, id: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/project/${idproject}/app/${id}`,
      method: "DELETE",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
    };

    /**
     *  Petición usando el Hook de Axios
     */
    useAxios(props)
      .catch((err) => {
        const error: ApiError = { error: true, message: err };
        handleData(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   *  Función que maneja los datos que salen de la API.
   *  @param info
   */
  const handleData = (info: AppWrapper | AppDTO | ApiError) => {
    /**
     * Hay Error
     */
    if (info && "error" in info && info.error) {
      setError(info);
    }

    /**
     * Si no hay error
     */
    if (info && "apps" in info) {
      // Quitamos los errores en caso de que los halla
      setError(undefined);

      // Cambiamos el state
      //console.log(info);
      let apps: Array<App> = AppMapper.prototype.mapArrayTo(info.apps);
      setData(apps);
    }

    if (info && "id" in info) {
      // Quitamos los errores en caso de que los halla
      setError(undefined);

      let app: App = AppMapper.prototype.mapTo(info);
      setData(app);
    }

    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    fetchData,
    createApp,
    editApp,
    deleteApp,
  };
};

/**
 *  Envoltorio de una propiedad que es un array. Esta es la respuesta del back-end.
 */
interface AppWrapper {
  apps: Array<AppDTO>;
}
