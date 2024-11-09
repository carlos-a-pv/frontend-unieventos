import { Component } from '@angular/core';
import { BackgroundComponent } from '../background/background.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-cuenta',
  standalone: true,
  imports: [BackgroundComponent],
  templateUrl: './recuperar-cuenta.component.html',
  styleUrl: './recuperar-cuenta.component.css'
})
export class RecuperarCuentaComponent {
  title ='UniEventos';
  recuperarCuentaForm!: FormGroup;


constructor(private formBuider: FormBuilder){
  this.crearFormularioRecuperarCuenta();
}
private crearFormularioRecuperarCuenta (){
  this.recuperarCuentaForm = this.formBuider.group({
    codigoRecuperación: ['', [Validators.required]]
  });
}
public validarCodigoCuenta(){
  console.log(this.recuperarCuentaForm.value);
}
}
