import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanProductsComponent } from './scan-products.component';

describe('ScanProductsComponent', () => {
  let component: ScanProductsComponent;
  let fixture: ComponentFixture<ScanProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
