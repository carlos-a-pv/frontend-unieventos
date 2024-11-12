import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToeknService } from '../../servicios/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLogged = false;
  email:string = "";

  constructor(private tokenService: ToeknService){
    this.isLogged = this.tokenService.isLogged();
    if(this.isLogged){
      this.email = this.tokenService.getEmail();
    }
  }

  public logout(){
    this.tokenService.logout();
  }
}
