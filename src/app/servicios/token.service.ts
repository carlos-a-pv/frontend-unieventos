import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Buffer} from 'buffer';

const TOKEN_KEY = "AuthToken";

@Injectable({
  providedIn: 'root'
})
export class ToeknService {

  constructor(private router: Router) { }

  public setToken(tokenSessionStorage: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, tokenSessionStorage)
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean  {   
      return (this.getToken()) ? true : false;
  }

  public login(token:string){
    this.setToken(token);
    this.router.navigate(["/"]);
  }
    
  public logout(){
    window.sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

  private decodePayload(token:string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }

  public getIdCuenta():string{
    const token = this.getToken();
    if(token){
      const values = this.decodePayload(token);
      return values.id;
    }

    return "";
  }

  public getRol():string{
    const token = this.getToken();
    if(token){
      const values = this.decodePayload(token);
      return values.rol;
    }
    return "";
  }
}