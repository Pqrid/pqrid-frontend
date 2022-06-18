import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // bottompanel:boolean = false;
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
  // bottomPanel(status:boolean){
  //   this.bottompanel = status;
  // }
}
