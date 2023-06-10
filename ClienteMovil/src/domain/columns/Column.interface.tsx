/**
 * Interfaz que declara la estructura de una columna, esta es la estructura
 * que usaremos en nuestro programa y utilizaremos mappers para mapear una
 * estructura a otra para hacerlo lo más reutilizable.
 */
export interface Column {
  id: string;
  idBoard: string;
  title: string;
}
