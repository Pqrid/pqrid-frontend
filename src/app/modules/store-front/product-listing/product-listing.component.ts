import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  bottompanel:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  products:any = [
    {
      itemname:'Modren',
      sale:false,
      // image:
    },
    {
      itemname:'Wooden',
      sale:true,
      // image:
    },
    {
      itemname:'Benhard',
      sale:false,
      // image:
    },
    {
      itemname:'Arizona',
      sale:true,
      // image:
    },
    {
      itemname:'Office',
      sale:true,
      // image:
    },
    {
      itemname:'Modren',
      sale:false,
      // image:
    },
    {
      itemname:'Wooden',
      sale:true,
      // image:
    },
    {
      itemname:'Benhard',
      sale:false,
      // image:
    },
  ]
  bottomPanel(status:boolean){
    this.bottompanel = status;
  }
}
