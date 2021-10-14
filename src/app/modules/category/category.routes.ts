import { Routes } from "@angular/router";
import { CategoryIndexComponent } from "./components/index/category-index.component";

export const CategoryRoutes: Routes = [
    {
        path: 'category',
        children: [
            { path: '', component: CategoryIndexComponent },
            { path: 'edit', component: CategoryIndexComponent },
            { path: 'delete', component: CategoryIndexComponent },
            { path: 'create', component: CategoryIndexComponent },
        ]
    }];