import { Component } from '@angular/core';
import { ToeknService } from '../../servicios/token.service';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.css'
})
export class HeaderAdminComponent {

  constructor(private tokenService:ToeknService){

  }

  public logout():void{
    this.tokenService.logout();
  }

}
