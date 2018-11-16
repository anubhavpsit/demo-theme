import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepaginationComponent } from './tablepagination.component';

describe('TablepaginationComponent', () => {
  let component: TablepaginationComponent;
  let fixture: ComponentFixture<TablepaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablepaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
