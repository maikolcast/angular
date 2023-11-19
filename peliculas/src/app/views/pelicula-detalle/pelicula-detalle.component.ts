import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../models/pelicula.model';
import { PeliculaService } from '../../controllers/pelicula.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css'],
})
export class PeliculaDetalleComponent implements OnInit {
  pelicula: Pelicula | undefined;

  constructor(
    private peliculaService: PeliculaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.peliculaService.obtenerDetallePelicula(id).subscribe((pelicula) => {
        this.pelicula = pelicula;
      });
    } else {
      alert('ID de pelicula no definido');
    }
  }
}
