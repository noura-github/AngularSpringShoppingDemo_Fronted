import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscriptionDoneComponent } from './unsubscription-done.component';

describe('UnsubscriptionDoneComponent', () => {
  let component: UnsubscriptionDoneComponent;
  let fixture: ComponentFixture<UnsubscriptionDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscriptionDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscriptionDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
