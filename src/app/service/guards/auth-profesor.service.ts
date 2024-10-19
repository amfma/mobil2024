import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthProfesorService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.auth.isLogin && this.auth.role === 'PROFESOR'){
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}
