import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  private URL_API =
    'https://api.themoviedb.org/3/movie/popular?api_key=5596185650b41de8db0a0ce0377ebfdf&language=es-ES&page=1';
  public URL_DETALLE = 'https://image.tmdb.org/t/p/w500/';

  constructor(private http: HttpClient) {}

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((response) => response.results));
  }

  obtenerDetallePelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.URL_API}/peliculas/${id}`);
  }
}
