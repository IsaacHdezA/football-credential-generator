import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home', title: 'Generador de credenciales',
    loadComponent: () => import('./views/generator/generator').then(m => m.GeneratorComponent),
    data: {
      'showMainLayout': false
    }
  }
];
