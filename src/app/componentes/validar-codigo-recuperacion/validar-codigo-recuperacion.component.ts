import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validar-codigo-recuperacion',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './validar-codigo-recuperacion.component.html',
  styleUrl: './validar-codigo-recuperacion.component.css'
})
export class ValidarCodigoRecuperacionComponent {
  codigoRecuperaciónForm!: FormGroup;

  constructor(private formBuider: FormBuilder){
    this.crearFormularioCodigoRecuperacion();
  }
  private crearFormularioCodigoRecuperacion (){
    this.codigoRecuperaciónForm = this.formBuider.group({
      codigo: ['', [Validators.required]]
    });
  }
  public validarCodigoCuenta(){
    console.log(this.codigoRecuperaciónForm.value)
  }
}


