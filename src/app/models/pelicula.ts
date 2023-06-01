export enum tipoPelicula {
  terror,
  comedia,
  amor,
  otros,
}
interface IPelicula {
  id?: string;
  nombre: string;
  tipo: tipoPelicula;
  fechaEstreno: Date;
  cantidadPublico: number;
  fotoPelicula: string;
}

export class Pelicula {
  id?: string = '';
  nombre: string = '';
  tipo: tipoPelicula = tipoPelicula.otros;
  fechaEstreno: Date = new Date();
  cantidadPublico: number = 0;
  fotoPelicula: string = '';
}
