import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario} from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-agregarcomentario',
  templateUrl: './agregarcomentario.component.html',
  styleUrls: ['./agregarcomentario.component.css']
})
export class AgregarcomentarioComponent implements OnInit {
  agregarComentarios: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.agregarComentarios=this.fb.group({
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      entidad:['',Validators.required]


  })
  }





  ngOnInit(): void {
  }
  
agregar() {
      const comentario: Comentario={
        nombres:this.agregarComentarios.get('nombres')?.value,
        apellidos:this.agregarComentarios.get('apellidos')?.value,
        entidad:this.agregarComentarios.get('entidad')?.value,
      }
      console.log(comentario)
    }
}


