import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { HttpServiceModule } from 'src/shared/async-services/http';
import { ConfigService } from './app-config.service';


// export function configServiceFactory(config: ConfigService) {
//   return () => config.load();
// }

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpServiceModule.forRoot()
  ],
  providers: [
    ConfigService,
    JwtHelperService,
    AuthGuard,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: configServiceFactory,
    //   deps: [ConfigService],
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
