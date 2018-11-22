import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglemapComponent } from './singlemap.component';

describe('SinglemapComponent', () => {
  let component: SinglemapComponent;
  let fixture: ComponentFixture<SinglemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
