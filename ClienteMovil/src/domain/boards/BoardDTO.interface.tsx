/**
 * Interfaz que declara la estructura de una pizarra que nos viene del back-end
 */
export interface BoardDTO {
  id: string;
  idapp: string;
  iduser: string;
  title: string;
  photo: string;
  created_at: string;
  updated_at: string;
}
