import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaDetalleComponent } from './views/pelicula-detalle/pelicula-detalle.component';
import { PeliculasListaComponent } from './views/peliculas-lista/peliculas-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaDetalleComponent,
    PeliculasListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
