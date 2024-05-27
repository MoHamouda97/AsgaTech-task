import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavComponent } from './common/nav/nav.component';

@NgModule({
    declarations: [
        LayoutComponent,
        FooterComponent,
        NavComponent
    ],
    imports: [
        RouterModule
    ],
    exports: []
})
export class LayoutModule {}
