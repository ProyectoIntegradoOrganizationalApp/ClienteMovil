/**
 * Interfaz que declara la estructura de una tarea que nos viene del back-end
 */
export interface TaskDTO {
  id: string;
  idcolumn: string;
  title: string;
  description: string;
  github: string;
}
