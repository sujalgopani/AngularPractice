import { Routes } from '@angular/router';
import { Mainnavbar } from './Crud/mainnavbar/mainnavbar';
import path from 'path';
import { Component } from '@angular/core';
import { All } from './Crud/all/all';
import { Add } from './Crud/add/add';
import { Update } from './Crud/update/update';
import { Delete } from './Crud/delete/delete';
import { Test } from './test/test';

export const routes: Routes = [
  {
    path: '',
    component: All,
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
    path:'Test',
    component:Test
  }
];
