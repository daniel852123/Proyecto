import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarcomentarioComponent } from './components/agregarcomentario/agregarcomentario.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';

const routes: Routes = [
{path:'', component:ListarComentariosComponent},
{path:'add',component:AgregarcomentarioComponent},
{path:'**', redirectTo:'', pathMatch:'full'}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
