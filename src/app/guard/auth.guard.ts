import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthServiceService} from "../services/auth-service.service";

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = inject(AuthServiceService).isAuth
  const router = inject(Router);

  if ( isLoggedIn){
    console.log(isLoggedIn)
    return true
  }
  return router.createUrlTree(['/login'])
};
