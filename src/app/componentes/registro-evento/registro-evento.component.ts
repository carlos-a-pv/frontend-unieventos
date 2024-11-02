import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-evento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro-evento.component.html',
  styleUrl: './registro-evento.component.css'
})
export class RegistroEventoComponent {
  registroEventoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){ }

  private crearFormularioEvento(){
  }

}
