import { Routes } from '@angular/router';
import { PeliculasListaComponent } from './views/peliculas-lista/peliculas-lista.component';
import { PeliculaDetalleComponent } from './views/pelicula-detalle/pelicula-detalle.component';

export const routes: Routes = [
  { path: '', component: PeliculasListaComponent },
  { path: 'detalle/:id', component: PeliculaDetalleComponent },
];
