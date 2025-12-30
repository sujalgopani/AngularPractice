// user.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = (route) => {
  const id = route.paramMap.get('id');
  const router = inject(Router);

  if (!id || +id <= 0) {
    router.navigate(['/']);
    return false; 
  }

  return true;
};
