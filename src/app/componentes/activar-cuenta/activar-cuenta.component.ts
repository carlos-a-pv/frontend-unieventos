import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-activar-cuenta',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './activar-cuenta.component.html',
  styleUrl: './activar-cuenta.component.css'
})
export class ActivarCuentaComponent {
  title ='UniEventos';
  activarCuentaForm!: FormGroup;


constructor(private formBuider: FormBuilder){
  this.crearFormularioActivarCuenta();
}
private crearFormularioActivarCuenta (){
  this.activarCuentaForm = this.formBuider.group({
    codigoActivación: ['', [Validators.required]]
  });
}
public validarCodigoCuenta(){
  console.log(this.activarCuentaForm.value);
}
}
