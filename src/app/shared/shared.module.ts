import { NgModule } from '@angular/core';
import { interceptors } from './providers/interseptors';
import { components } from './components/components';
import { common } from './modules/common';
import { services } from './services/services';

@NgModule({
    imports: [
        ...common,
        ...components
    ],
    exports: [
        ...common,
        ...components
    ],
    providers: [
        ...interceptors,
        ...services
    ]
})

export class SharedModule {}
