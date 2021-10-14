import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from './modules/_common/common.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CategoryModule } from './modules/category/category.module';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlockUIModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    DashboardModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
