export class Pelicula {
  constructor(
    public id: number,
    public backdrop_path: string,
    public poster_path: string,
    public title: string,
    public overview: string,
    public portada: string,
  ) {}
}
