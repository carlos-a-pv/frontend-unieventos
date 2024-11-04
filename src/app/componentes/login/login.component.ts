import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from "../background/background.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, BackgroundComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  title = 'UniEventos';
}
