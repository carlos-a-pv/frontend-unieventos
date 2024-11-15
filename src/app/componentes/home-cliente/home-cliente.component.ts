import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";
import { EventoComponent } from "../evento/evento.component";
import { BannerComponent } from "../banner/banner.component";
import { ItemEventoDTO } from '../../dto/evento/item-evento-dto';

@Component({
  selector: 'app-home-cliente',
  standalone: true,
  imports: [RouterModule, HeaderComponent,FooterComponent, BannerComponent],
  templateUrl: './home-cliente.component.html',
  styleUrl: './home-cliente.component.css'
})
export class HomeComponentCliente {
  eventos:ItemEventoDTO | null [];


}
