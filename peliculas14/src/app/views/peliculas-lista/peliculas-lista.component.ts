import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../controllers/pelicula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-lista',
  templateUrl: './peliculas-lista.component.html',
  styleUrls: ['./peliculas-lista.component.css'],
})
export class PeliculasListaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  URL_DETALLE: string;
  imagenFondo: string = 'https://image.tmdb.org/t/p/w500/';
  titulo: string = 'Peliculas';
  texto: string = 'Peliculas';

  constructor(
    private peliculaService: PeliculaService,
    private router: Router
  ) {
    this.URL_DETALLE = peliculaService.URL_DETALLE;
  }

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
      this.imagenFondo = "https://image.tmdb.org/t/p/w500/" + this.peliculas[0].backdrop_path;
      this.titulo = this.peliculas[0].title;
      this.texto = this.peliculas[0].overview;
    });
  }

  handleClick(id: number): void {
    this.router.navigate(['/detalle', id]);
  }
}
