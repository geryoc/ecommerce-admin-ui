import { Routes } from "@angular/router";
import { DashboardIndexComponent } from "./components/index/dashboard-index.component";

export const DashboardRoutes: Routes = [
    {
        path: 'home',
        children: [
            { path: '', component: DashboardIndexComponent },
        ]
    }];