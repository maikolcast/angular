import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from '../../models/pelicula.model';
import { Credito } from '../../models/credito.model';
import { DetalleService } from '../../controllers/detalle.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css'],
})
export class PeliculaDetalleComponent implements OnInit {
  pelicula: Pelicula | undefined;
  credito: Credito[] | undefined;
  URL_DETALLE: string;

  constructor(
    private detalleService: DetalleService,
    private route: ActivatedRoute
  ) {
    this.URL_DETALLE = detalleService.URL_DETALLE;
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.detalleService.obtenerDetallePelicula(id).subscribe((pelicula) => {
        this.pelicula = pelicula;
      });
      this.detalleService.obtenerCreditosPelicula(id).subscribe((credito) => {
        this.credito = credito.cast;
      });
    } else {
      alert('No se encontró el id de la película');
    }
  }
}
