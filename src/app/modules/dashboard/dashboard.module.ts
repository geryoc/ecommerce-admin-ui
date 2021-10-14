import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboardCardComponent } from './components/card/dashboard-card.component';
import { DashboardIndexComponent } from './components/index/dashboard-index.component';

@NgModule({
    declarations: [
        DashboardIndexComponent,
        DashboardCardComponent,
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        DashboardIndexComponent,
        DashboardCardComponent,
    ],
    providers: [],
    bootstrap: []
})
export class DashboardModule {

}