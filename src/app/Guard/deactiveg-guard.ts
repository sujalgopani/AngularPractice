import { CanActivateFn, CanDeactivate, CanDeactivateFn } from '@angular/router';

export const deactivegGuard: CanDeactivateFn<unknown> = (component) => {
  if(component && typeof(component as any).canDeactivate === "function"){
    return (component as any).canDeactivate();
  }
  return true;
};
