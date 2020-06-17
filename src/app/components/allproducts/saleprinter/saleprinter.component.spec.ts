import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleprinterComponent } from './saleprinter.component';

describe('SaleprinterComponent', () => {
  let component: SaleprinterComponent;
  let fixture: ComponentFixture<SaleprinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleprinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleprinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
