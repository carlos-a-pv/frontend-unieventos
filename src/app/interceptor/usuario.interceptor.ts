import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { ToeknService } from '../servicios/token.service';


export const usuarioInterceptor: HttpInterceptorFn = (req, next) => {


 const tokenService = inject(ToeknService);
 const isApiAuth = req.url.includes("api/auth");
 const isAPiPublico = req.url.includes("api/publico");


 if (!tokenService.isLogged() || isApiAuth || isAPiPublico) {
   return next(req);
 }


 const token = tokenService.getToken();


 const authReq = req.clone({
   setHeaders: {
     Authorization: `Bearer ${token}`
   }
 });


 return next(authReq);
};
