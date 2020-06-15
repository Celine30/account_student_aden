import {NgModule} from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    exports: [  
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule
    ]
})

export class MaterialModule {
}