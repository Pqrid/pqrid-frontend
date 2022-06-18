import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-products',
  templateUrl: './scan-products.component.html',
  styleUrls: ['./scan-products.component.scss']
})
export class ScanProductsComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
