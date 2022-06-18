import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IConfig, NgxMaskModule } from 'ngx-mask';


/** Third party modules */

const maskConfig: Partial<IConfig> = {
  validation: false,
};

/** Custom Components Registration*/
export const COMPONENTS = [
  PageNotFoundComponent,

];

@NgModule({
  imports: [
  CommonModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],

  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
