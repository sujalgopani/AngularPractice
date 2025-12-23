// user.resolver.ts
import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<any> = async (route) => {
  const id = route.paramMap.get('id');
  const router = inject(Router);

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!res.ok) throw new Error('Invalid User');
    return res.json();
  } catch (err) {
    router.navigate(['/']);
    throw err;
  }
};
