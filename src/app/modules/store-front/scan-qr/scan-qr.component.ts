import { Component, OnInit } from '@angular/core';
// import { BarcodeFormat } from '@zxing/library';
// import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html',
  styleUrls: ['./scan-qr.component.scss']
})
export class ScanQrComponent implements OnInit {
  serchres:string = '';

  constructor() { }

  ngOnInit(): void {
  }
  onCodeResult(resultString: string) {
    
    console.log(this.serchres = resultString)
  }
}
