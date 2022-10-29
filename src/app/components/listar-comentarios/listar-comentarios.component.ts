import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/Comentario';




@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

listComentarios: Comentario [] =[
  {
    entidad: 'Cibersecurity',
    nombres: 'Jorge ',
    apellidos: 'Collazos'
  },
  {
    entidad: 'Company S.A',
    nombres: 'Robin ',
    apellidos: 'Perez'
  },
  {
    entidad: 'tiwch',
    nombres: 'Alejandro ',
    apellidos: 'Riaño' 
   },
   {
    entidad: 'Empresa Margaritas',
    nombres: 'Lorenzo ',
    apellidos: 'Pizarro'
   },
   {
    entidad: 'Intel',
    nombres: 'John ',
    apellidos: 'Ortega'
   },
   {
    entidad: 'Nvidia',
    nombres: 'Arturo ',
    apellidos: 'Revelo'
   }
]
  constructor() { }

  ngOnInit(): void {
  }

}
