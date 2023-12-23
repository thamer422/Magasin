import { CanActivate, CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const articleGuard: CanActivateFn = (route, state) => {
  return true;
};
export class ArticleGuard implements CanActivate {
  constructor (private authService: AuthService, private router :Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
  if (this.authService.testerAdmin()){
    return true;
  }
  else{
    this.router.navigate(['forbidden']);
  }
  return false;
  }

}