import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import {catchError, map, of, pipe} from 'rxjs'
import { Observable } from 'rxjs';
 

export const authGuard: CanActivateFn = (route, state) =>
{
const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated()
    map(() => true),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  };