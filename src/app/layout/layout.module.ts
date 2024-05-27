import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent,
        FooterComponent,
        NavComponent
    ],
    imports: [
        RouterModule,
        SharedModule
    ],
    exports: []
})
export class LayoutModule {}
