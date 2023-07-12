import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor() {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      window.location.href = 'http://localhost:4200/';
      return false;
    }
  }
}
