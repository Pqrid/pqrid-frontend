import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreFrontRoutingModule } from './store-front-routing.module';
import { StoreFrontComponent } from './store-front/store-front.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/angular-material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SwiperModule } from 'swiper/angular';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ScanQrComponent } from './scan-qr/scan-qr.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ScanProductsComponent } from './scan-products/scan-products.component';

@NgModule({
  declarations: [
    StoreFrontComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ProductFiltersComponent,
    ScanQrComponent,
    ProductReviewsComponent,
    ScanProductsComponent
  ],
  imports: [
    CommonModule,
    StoreFrontRoutingModule,
    AngularMaterialModule,
    SwiperModule,
    ZXingScannerModule,
    NgxImageZoomModule
  ]
})
export class StoreFrontModule { }
