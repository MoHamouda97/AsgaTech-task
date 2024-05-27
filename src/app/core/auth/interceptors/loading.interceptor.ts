import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from '../../../shared/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();

        return next.handle(req).pipe(
            delay(1000),
            finalize(() => {
                this.loadingService.hide();
            }));
    }
}
