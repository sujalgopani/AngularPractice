import { Routes } from '@angular/router';
import { All } from './Crud/all/all';
import { Add } from './Crud/add/add';
import { Update } from './Crud/update/update';
import { Delete } from './Crud/delete/delete';
import { Test } from './test/test';
import { Login } from './Crud/login/login';
import { Adminnav } from './Crud/RoleNav/studentnav/adminnav/adminnav';
import { Studentnav } from './Crud/RoleNav/studentnav/studentnav';
import { Register } from './Crud/register/register';
import { roleGuard } from './Crud/Guard/role-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    pathMatch: 'full',
  },
  // {
  //   path: 'studentsrud',
  //   children: [
  //     { path: 'all', component: All },
  //     { path: 'add-student', component: Add },
  //     { path: 'update-student', component: Update },
  //     { path: 'delete-student', component: Delete },
  //   ],
  // },
  {
    path: 'test',
    component: Test,
  },
  // login by role
  {
    path: 'Login',
    component: Login,
  },
  {
    path: 'adminnav',
    component: Adminnav,
    children: [
      { path: 'all', component: All },
      { path: 'add-student', component: Add },
      { path: 'update-student', component: Update },
      { path: 'delete-student', component: Delete },
    ],
  },
  {
    path: 'studentnav',
    component: Studentnav,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: All },
    ],
  },
  {
    path: 'register',
    component: Register,
  },
  // ,
  // {
  //   path: '**',
  //   redirectTo: 'login',
  // },
];
