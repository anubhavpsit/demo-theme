import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifymobileComponent } from './verifymobile.component';

describe('VerifymobileComponent', () => {
  let component: VerifymobileComponent;
  let fixture: ComponentFixture<VerifymobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifymobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifymobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
