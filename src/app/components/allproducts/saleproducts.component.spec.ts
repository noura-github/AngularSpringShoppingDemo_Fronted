import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleproductsComponent } from './saleproducts.component';

describe('SaleproductsComponent', () => {
  let component: SaleproductsComponent;
  let fixture: ComponentFixture<SaleproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
