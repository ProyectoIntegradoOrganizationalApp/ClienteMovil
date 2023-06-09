/**
 * Interfaz que declara la estructura de una pizarra, esta es la estructura
 * que usaremos en nuestro programa y utilizaremos mappers para mapear una
 * estructura a otra para hacerlo lo más reutilizable.
 */
export interface Board {
  id: string;
  idApp: string;
  idUser: string;
  title: string;
  photo: string;
  created_at: string;
  updated_at: string;
}
