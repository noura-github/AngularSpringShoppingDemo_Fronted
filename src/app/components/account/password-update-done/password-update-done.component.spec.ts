import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUpdateDoneComponent } from './password-update-done.component';

describe('PasswordUpdateDoneComponent', () => {
  let component: PasswordUpdateDoneComponent;
  let fixture: ComponentFixture<PasswordUpdateDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordUpdateDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordUpdateDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
