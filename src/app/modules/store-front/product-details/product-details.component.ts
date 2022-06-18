import { Component, OnInit } from '@angular/core';

import SwiperCore, { FreeMode, Navigation, Thumbs, SwiperOptions  } from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  bottompanel:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  thumbsSwiper: any;

  products:any = [
    {
      itemname:'Modren',
      sale:false,
    },
    {
      itemname:'Wooden',
      sale:true,
    },
    {
      itemname:'Benhard',
      sale:false,
    },
    {
      itemname:'Arizona',
      sale:true,
    },
    {
      itemname:'Office',
      sale:true,
    },
    {
      itemname:'Modren',
      sale:false,
    },
    {
      itemname:'Wooden',
      sale:true,
    },
    {
      itemname:'Benhard',
      sale:false,
    },
  ]

  appSwiperThumb: SwiperOptions = {
    loop:true,
    spaceBetween:10,
    slidesPerView:4,
    freeMode:true,
    direction:'horizontal',
    breakpoints:{
      '768': {
        direction:'vertical',
      }
    }
  };

  bottomPanel(status:boolean){
    this.bottompanel = status;
  }
}
