import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable()
export class LoadingInterceptorHelper implements HttpInterceptor {
    @BlockUI() blockUI!: NgBlockUI;
    private totalRequests = 0;

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        this.totalRequests++;
        this.blockUI.start();

        return next.handle(request).pipe(
            finalize((): void => {
                this.totalRequests--;
                if (this.totalRequests === 0) {
                    this.blockUI.stop();
                }
            })
        );
    }
}