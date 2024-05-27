import { Route } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const routes: Route[] = [
    {
        path: 'app',
        component: LayoutComponent
    },
    {
        path: '**',
        redirectTo: 'app'
    }
] 