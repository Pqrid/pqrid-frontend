import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'store-front' },
  {
    path:'',component:LayoutComponent,
    children: [
      {
        path: 'home',
        canActivate : [AuthGuard],
        loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'store-front',
        canActivate : [AuthGuard],
        loadChildren: () => import('../modules/store-front/store-front.module').then(m => m.StoreFrontModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers : [AuthGuard],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
