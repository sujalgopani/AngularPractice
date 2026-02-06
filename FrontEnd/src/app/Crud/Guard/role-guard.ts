import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const role = localStorage.getItem('Role');
  const expectedRole = route.data?.['role'];

  // 🔥 Not logged in
  if(!role){
    router.navigate(['/login']);
    return false;
  }

  // 🔥 Wrong role
  if(role !== expectedRole){
    alert("Access Denied!");
    router.navigate(['/login']);
    return false;
  }

  return true;
};
