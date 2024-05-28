import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "../../core/auth/interceptors/error.interceptor";
import { LoadingInterceptor } from "../../core/auth/interceptors/loading.interceptor";

export const INTERCEPTORS = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorInterceptor,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoadingInterceptor,
        multi: true
    }
]