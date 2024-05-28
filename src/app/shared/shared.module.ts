import { NgModule } from '@angular/core';
import { INTERCEPTORS } from './providers/interseptors';
import { COMPONENTS } from './components/components';
import { COMMON } from './modules/common';
import { SERVICES } from './services/services';

@NgModule({
    imports: [
        ...COMMON,
        ...COMPONENTS
    ],
    exports: [
        ...COMMON,
        ...COMPONENTS
    ],
    providers: [
        ...INTERCEPTORS,
        ...SERVICES
    ]
})

export class SharedModule {}
