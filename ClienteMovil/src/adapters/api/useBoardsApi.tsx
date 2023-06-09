import { useState } from "react";
import { useAxios } from "./useAxios";
import { AxiosHeaders } from "axios";

import { useAuth } from "../../hooks/useAuth";

import { RequestParams } from "../../domain/RequestParams.interface";
import { Board } from "../../domain/boards/Board.interface";
import { ApiError } from "../../domain/ApiError.interface";
import { BoardMapper } from "../mappers/BoardMapper";
import { BoardDTO } from "../../domain/boards/BoardDTO.interface";

import { API_URL } from "@env";

/**
 * Hook para la conexión con los endpoints del back-end que se
 * encargan de hacer las peticiones sobre proyectos.
 */
export const useBoardsApi = () => {
  const { user } = useAuth();

  const [data, setData] = useState<Array<Board> | Board>();
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
      url: `${API}/${idapp}/task_app/boards`,
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

  const createBoard = (idapp: string, title: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/board`,
      method: "POST",
      headers: new AxiosHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?._token}`,
      }),
      data: {
        title: title,
        photo: "https://www.svgrepo.com/show/513474/rocket.svg",
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

  const editBoard = (idapp: string, id: string, newTitle: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/board/${id}`,
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

  const deleteBoard = (idapp: string, id: string) => {
    setLoading(true);

    /**
     * Props de la petición
     */
    const props: RequestParams = {
      url: `${API}/${idapp}/task_app/board/${id}`,
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
  const handleData = (info: BoardWrapper | BoardDTO | ApiError) => {
    /**
     * Hay Error
     */
    if (info && "error" in info && info.error) {
      setError(info);
    }

    /**
     * Si no hay error
     */
    if (info && "boards" in info) {
      // Quitamos los errores en caso de que los halla
      setError(undefined);

      // Cambiamos el state
      //console.log(info);
      let boards: Array<Board> = BoardMapper.prototype.mapArrayTo(info.boards);
      setData(boards);
    }

    if (info && "id" in info) {
      // Quitamos los errores en caso de que los halla
      setError(undefined);

      let board: Board = BoardMapper.prototype.mapTo(info);
      setData(board);
    }

    setLoading(false);
  };

  return {
    data,
    error,
    loading,
    fetchData,
    createBoard,
    editBoard,
    deleteBoard,
  };
};

/**
 *  Envoltorio de una propiedad que es un array. Esta es la respuesta del back-end.
 */
interface BoardWrapper {
  boards: Array<BoardDTO>;
}
