import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './modules/dashboard/dashboard.routes';
import { CategoryRoutes } from "./modules/category/category.routes";

const routes: Routes = [
  ...DashboardRoutes,
  ...CategoryRoutes,
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
