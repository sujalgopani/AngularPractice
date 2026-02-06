import { Routes } from '@angular/router';
import { All } from './Crud/all/all';
import { Add } from './Crud/add/add';
import { Update } from './Crud/update/update';
import { Delete } from './Crud/delete/delete';
import { Test } from './test/test';
import { Login } from './Crud/login/login';
import { Adminnav } from './Crud/RoleNav/studentnav/adminnav/adminnav';
import { Studentnav } from './Crud/RoleNav/studentnav/studentnav';
import { roleGuard } from './Crud/Guard/role-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    pathMatch: 'full',
  },
  {
    path: 'StudentCrud',
    children: [
      { path: 'All', component: All },
      { path: 'Add-Student', component: Add },
      { path: 'Update-Student', component: Update },
      { path: 'Delete-Student', component: Delete },
    ],
  },
  {
    path: 'Test',
    component: Test,
  },
  // login by role
  {
    path: 'Login',
    component: Login,
  },
 {
  path: 'Adminnav',
  component: Adminnav,
  canActivate: [roleGuard],
  data: { role: 'Admin' },
  children: [
    { path: 'All', component: All },
    { path: 'Add-Student', component: Add },
    { path: 'Update-Student', component: Update },
    { path: 'Delete-Student', component: Delete },
  ],
},
{
  path: 'StudentNav',
  component: Studentnav,
  canActivate: [roleGuard],
  data: { role: 'Student' },
  children: [
    { path: 'All', component: All },
  ],
}
];
