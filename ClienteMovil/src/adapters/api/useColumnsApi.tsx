import { useState } from "react";
import { useAxios } from "./useAxios";
import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";

import { RequestParams } from "../../domain/RequestParams.interface";
import { Column } from "../../domain/columns/Column.interface";
import { ApiError } from "../../domain/ApiError.interface";
import { ColumnMapper } from "../mappers/ColumnMapper";
import { ColumnDTO } from "../../domain/columns/ColumnDTO.interface";

import { API_URL } from "@env";

/**
 * Hook para la conexión con los endpoints del back-end que se
 * encargan de hacer las peticiones sobre proyectos.
 */
export const useColumnsApi = () => {
  const { user } = useAuth();

  const [data, setData] = useState<Array<Column> | Column>();
  const [error, setError] = useState<ApiError>();
  const [loading, setLoading] = useState<boolean>(false);

  const API = API_URL;

  /**
   *  Función que fetchea los datos de los proyectos, se debe de llamar desde un
   *  efecto, para que el objeto de usuario ya haya cargado.
   */
  const fetchData = (idapp: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/columns`,
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

  const createColumn = (idapp: string, title: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/column`,
      method: "POST",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
      data: {
        title: title,
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

  const editColumn = (idapp: string, newTitle: string, id: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/column/${id}`,
      method: "PUT",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
      data: {
        ...(newTitle.length > 0 && { title: newTitle }),
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

  const deleteColumn = (idapp: string, id: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/column/${id}`,
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
  const handleData = (info: ColumnWrapper | ColumnDTO | ApiError) => {
    /**
     * Hay Error
     */
    if (info && "error" in info && info.error) {
      setError(info);
    }

    /**
     * Si no hay error
     */
    if (info && "columns" in info) {
      // Quitamos los errores en caso de que los halla
      setError(undefined);

      // Cambiamos el state
      //console.log(info);
      let columns: Array<Column> = ColumnMapper.prototype.mapArrayTo(
        info.columns
      );
      setData(columns);
    }

    if (info && "id" in info) {
      // Quitamos los errores en caso de que los halla
      setError(undefined);

      let column: Column = ColumnMapper.prototype.mapTo(info);
      setData(column);
    }

    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    fetchData,
    createColumn,
    editColumn,
    deleteColumn,
  };
};

/**
 *  Envoltorio de una propiedad que es un array. Esta es la respuesta del back-end.
 */
interface ColumnWrapper {
  columns: Array<ColumnDTO>;
}
