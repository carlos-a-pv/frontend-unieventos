import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'UniEventos';
  loginForm!: FormGroup;

  constructor(private formBuider: FormBuilder){
    this.crearFormularioLogin();
  }
  private crearFormularioLogin(){
    this.loginForm = this.formBuider.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]]
     })
  }
  public ingresar(){
    console.log(this.loginForm.value)
  }

}
