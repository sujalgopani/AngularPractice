import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const logincheckGuard: CanActivateFn = async(route, state) => {
  const router = inject(Router);
  await new Promise(res=>setTimeout(res,3000));
  const isLogin = localStorage.getItem('islogin');
  
  if (isLogin) {
    return true;   
  }
  return router.parseUrl('/login');
};
