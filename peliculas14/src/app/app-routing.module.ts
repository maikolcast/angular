import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasListaComponent } from './views/peliculas-lista/peliculas-lista.component';
import { PeliculaDetalleComponent } from './views/pelicula-detalle/pelicula-detalle.component';

const routes: Routes = [
  { path: '', component: PeliculasListaComponent },
  { path: 'detalle/:id', component: PeliculaDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
