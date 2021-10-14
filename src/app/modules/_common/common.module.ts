import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingInterceptorHelper } from './helpers/loading-interceptor.helper';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        AppRoutingModule
    ],
    exports: [
        NavbarComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorHelper, multi: true }
    ],
    bootstrap: []
})
export class CommonModule { }
