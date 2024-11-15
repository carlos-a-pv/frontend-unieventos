import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { PostHeaderComponent } from "../post-header/post-header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [HeaderComponent, PostHeaderComponent, FooterComponent],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

}
