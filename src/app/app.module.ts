import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarcomentarioComponent } from './components/agregarcomentario/agregarcomentario.component';
import { EditarcomentarioComponent } from './components/editarcomentario/editarcomentario.component';
import { VercomentarioComponent } from './components/vercomentario/vercomentario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarcomentarioComponent,
    EditarcomentarioComponent,
    VercomentarioComponent,
    NavbarComponent,
    ListarComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
