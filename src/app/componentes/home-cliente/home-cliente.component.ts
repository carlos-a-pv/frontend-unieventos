import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { EventoComponent } from "../evento/evento.component";

@Component({
  selector: 'app-home-cliente',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent, PostHeaderComponent, FooterComponent],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeComponentCliente {

}
