import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  
  {
    canActivate : [AuthGuard],
    path: '', loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'login', loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
