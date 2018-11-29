import { TestBed, inject } from '@angular/core/testing';

import { MysocketService } from './mysocket.service';

describe('MysocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MysocketService]
    });
  });

  it('should be created', inject([MysocketService], (service: MysocketService) => {
    expect(service).toBeTruthy();
  }));
});
