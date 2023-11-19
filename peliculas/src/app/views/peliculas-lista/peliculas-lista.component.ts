import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../controllers/pelicula.service';

@Component({
  selector: 'app-peliculas-lista',
  templateUrl: './peliculas-lista.component.html',
  styleUrls: ['./peliculas-lista.component.css'],
})
export class PeliculasListaComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }
}
