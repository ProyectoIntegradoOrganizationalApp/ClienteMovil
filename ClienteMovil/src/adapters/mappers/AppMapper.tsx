import { Mapper } from "./Mapper";

import { App } from "../../domain/apps/App.interface";
import { AppDTO } from "../../domain/apps/AppDTO.interface";

export class AppMapper extends Mapper<App, AppDTO> {
  mapFrom(data: App): AppDTO {
    return {
      id: data.id,
      idproject: data.idProject,
      iduser: data.idUser,
      name: data.name,
      photo: data.photo,
      description: data.description,
    };
  }

  mapTo(data: AppDTO): App {
    return {
      id: data.id,
      idProject: data.idproject,
      idUser: data.iduser,
      name: data.name,
      photo: data.photo,
      description: data.description,
    };
  }
}
