/**
 * Interfaz que declara la estructura de una app que nos viene del back-end
 */
export interface AppDTO {
  id: string;
  idproject: string;
  iduser: string;
  name: string;
  description: string;
  photo: string;
}
