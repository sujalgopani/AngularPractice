import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  debugger
  console.log('Guard !!!');
  const router = inject(Router);
  const token = localStorage.getItem('token');

  // ✅ No token → go login
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  // ✅ Decode JWT
  const payload = JSON.parse(atob(token.split('.')[1]));

  // exp is in seconds → convert to milliseconds
  const expiryTime = payload.exp * 1000;

  // ✅ Token expired
  if (Date.now() > expiryTime) {
    localStorage.clear(); // logout
    router.navigate(['/login']);
    console.log('Expire !');

    return false;
  }

  return true;
};
