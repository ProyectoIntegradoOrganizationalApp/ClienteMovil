/**
 * Interfaz que declara la estructura de una tarea, esta es la estructura
 * que usaremos en nuestro programa y utilizaremos mappers para mapear una
 * estructura a otra para hacerlo lo más reutilizable.
 */
export interface Task {
  id: string;
  idColumn: string;
  title: string;
  description: string;
  github: string;
}
