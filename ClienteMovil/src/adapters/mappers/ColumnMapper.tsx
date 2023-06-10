import { Mapper } from "./Mapper";

import { Column } from "../../domain/columns/Column.interface";
import { ColumnDTO } from "../../domain/columns/ColumnDTO.interface";

export class ColumnMapper extends Mapper<Column, ColumnDTO> {
  mapFrom(data: Column): ColumnDTO {
    return {
      id: data.id,
      idboard: data.idBoard,
      title: data.title,
    };
  }

  mapTo(data: ColumnDTO): Column {
    return {
      id: data.id,
      idBoard: data.idboard,
      title: data.title,
    };
  }
}
