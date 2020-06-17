import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalelaptopComponent } from './salelaptop.component';

describe('SalelaptopComponent', () => {
  let component: SalelaptopComponent;
  let fixture: ComponentFixture<SalelaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalelaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalelaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
