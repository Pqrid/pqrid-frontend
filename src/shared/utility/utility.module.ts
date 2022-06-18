/** Angular core modules */
import { NgModule, ModuleWithProviders } from '@angular/core';
/** Custom Utilities Services */
import { UtilityService } from './utility.service';

@NgModule()
export class UtilityModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: UtilityModule,
      providers: [UtilityService]
    };
  }
}
