import {NgModule} from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

@NgModule({
    exports: [  
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatSlideToggleModule
    ]
})

export class MaterialModule {
}