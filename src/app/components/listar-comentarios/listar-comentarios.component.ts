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
    titulo: 'Cibersecurity',
    autor: 'Jorge Collazos',
    fechaCreacion: new Date()
  },
  {
    titulo: 'Company S.A',
    autor: 'Robin Perez',
    fechaCreacion: new Date()
  },
  {
    titulo: 'tiwch',
    autor: 'Alejandro Riaño',
    fechaCreacion: new Date() 
   },
   {
    titulo: 'Empresa Margaritas',
    autor: 'Lorenzo Pizzarro',
    fechaCreacion: new Date()
   },
   {
    titulo: 'Intel',
    autor: 'John Ortega',
    fechaCreacion: new Date("07/10/2015")
   },
   {
    titulo: 'Nvidia',
    autor: 'Arturo Revelo',
    fechaCreacion: new Date("08/25/2000")
   }
]
  constructor() { }

  ngOnInit(): void {
  }

}
