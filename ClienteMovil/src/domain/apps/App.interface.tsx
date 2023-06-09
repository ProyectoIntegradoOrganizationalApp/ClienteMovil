/**
 * Interfaz que declara la estructura de una app, esta es la estructura
 * que usaremos en nuestro programa y utilizaremos mappers para mapear una
 * estructura a otra para hacerlo lo más reutilizable.
 */
export interface App {
  id: string;
  idProject: string;
  idUser: string;
  name: string;
  description: string;
  photo: string;
}
