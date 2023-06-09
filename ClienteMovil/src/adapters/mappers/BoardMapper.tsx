import { Mapper } from "./Mapper";

import { Board } from "../../domain/boards/Board.interface";
import { BoardDTO } from "../../domain/boards/BoardDTO.interface";

export class BoardMapper extends Mapper<Board, BoardDTO> {
  mapFrom(data: Board): BoardDTO {
    return {
      id: data.id,
      idapp: data.idApp,
      iduser: data.idUser,
      title: data.title,
      photo: data.photo,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };
  }

  mapTo(data: BoardDTO): Board {
    return {
      id: data.id,
      idApp: data.idapp,
      idUser: data.iduser,
      title: data.title,
      photo: data.photo,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };
  }
}
