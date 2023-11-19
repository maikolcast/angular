import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pelicula } from '../models/pelicula.model';
import { Credito } from '../models/credito.model';

@Injectable({
  providedIn: 'root',
})
export class DetalleService {
  private URL_API =
    'https://api.themoviedb.org/3/movie/';
  public URL_DETALLE = 'https://image.tmdb.org/t/p/w500/';

  constructor(private http: HttpClient) {}

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http
      .get<any>(this.URL_API)
      .pipe(map((response) => response.results));
  }

  obtenerDetallePelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.URL_API}/${id}?api_key=5596185650b41de8db0a0ce0377ebfdf&language=es-ES&page=1`);
  }
  obtenerCreditosPelicula(id: number): Observable<Credito> {
    return this.http.get<Credito>(`${this.URL_API}/${id}/credits?api_key=5596185650b41de8db0a0ce0377ebfdf&language=es-ES&page=1`);
    /* return this.http
      .get<any>(`${this.URL_API}/${id}/credits?api_key=5596185650b41de8db0a0ce0377ebfdf&language=es-ES&page=1`)
      .pipe(map((response) => response.cast)); */
  }
}
