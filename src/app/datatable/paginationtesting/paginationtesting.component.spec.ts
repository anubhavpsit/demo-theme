import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationtestingComponent } from './paginationtesting.component';

describe('PaginationtestingComponent', () => {
  let component: PaginationtestingComponent;
  let fixture: ComponentFixture<PaginationtestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationtestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
