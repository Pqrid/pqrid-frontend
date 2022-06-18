import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ScanProductsComponent } from './scan-products/scan-products.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { StoreFrontComponent } from './store-front/store-front.component';

const routes: Routes = [
  {
    path:"", component:StoreFrontComponent
  },
  {
    path:"product-listing", component:ProductListingComponent
  },
  {
    path:"product-details", component:ProductDetailsComponent
  },
  {
    path:"scan-qr", component:ScanQrComponent
  },
  {
    path:"product-reviews", component:ProductReviewsComponent
  },
  {
    path:"scan-products", component:ScanProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreFrontRoutingModule { }
