import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayout } from './core/admin/admin.layout';
import { AuthLayout } from './core/auth/auth.layout';
import { DashboardPage } from './modules/dashboard/pages/dashboard/dashboard.page';
import { HomePage } from './modules/dashboard/pages/home/home.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLayout,
    children: [
      {
        path: '',
        component: HomePage,
      }
    ]
  }, {
    path: 'session',
    component: AuthLayout,
    children: [{
        path: '',
        loadChildren: () => import('./modules/session/session.module').then(m => m.SessionModule)
    
      }
    ]
  }, {
    path: 'gameplay',
    component: AdminLayout,
    children: [
      {
        path: '', 
        loadChildren: () => import('./modules/gameplay/gameplay.module').then(m=> m.GameplayModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
