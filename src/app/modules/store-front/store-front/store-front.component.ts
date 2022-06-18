import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})
export class StoreFrontComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  storeitems:any = [
    {
      itemname:'Living Room',
      itemtype:'living-room'
    },
    {
      itemname:'Bed Room',
      itemtype:'bed-room'
    },
    {
      itemname:'Dining Room',
      itemtype:'dining-room'
    },
    {
      itemname:'Office',
      itemtype:'office-room'
    },
    // {
    //   itemname:'Office',
    //   itemtype:'living-room'
    // },
    // {
    //   itemname:'Living Room',
    //   itemtype:'living-room'
    // },
    // {
    //   itemname:'Bed Room',
    //   itemtype:'living-room'
    // },
    // {
    //   itemname:'Dining Room',
    //   itemtype:'living-room'
    // },
  ]
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
}
