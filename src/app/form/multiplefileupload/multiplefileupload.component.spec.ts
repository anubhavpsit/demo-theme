import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplefileuploadComponent } from './multiplefileupload.component';

describe('MultiplefileuploadComponent', () => {
  let component: MultiplefileuploadComponent;
  let fixture: ComponentFixture<MultiplefileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplefileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplefileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
