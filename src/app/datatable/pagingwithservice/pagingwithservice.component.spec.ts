import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingwithserviceComponent } from './pagingwithservice.component';

describe('PagingwithserviceComponent', () => {
  let component: PagingwithserviceComponent;
  let fixture: ComponentFixture<PagingwithserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagingwithserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingwithserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
