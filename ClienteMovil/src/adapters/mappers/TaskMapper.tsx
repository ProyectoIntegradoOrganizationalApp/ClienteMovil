import { Mapper } from "./Mapper";

import { Task } from "../../domain/tasks/Task.interface";
import { TaskDTO } from "../../domain/tasks/TaskDTO.interface";

export class TaskMapper extends Mapper<Task, TaskDTO> {
  mapFrom(data: Task): TaskDTO {
    return {
      id: data.id,
      idcolumn: data.idColumn,
      title: data.title,
      description: data.description,
      github: data.github,
    };
  }

  mapTo(data: TaskDTO): Task {
    return {
      id: data.id,
      idColumn: data.idcolumn,
      title: data.title,
      description: data.description,
      github: data.github,
    };
  }
}
