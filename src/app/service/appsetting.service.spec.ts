import { TestBed, inject } from '@angular/core/testing';

import { AppsettingService } from './appsetting.service';

describe('AppsettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsettingService]
    });
  });

  it('should be created', inject([AppsettingService], (service: AppsettingService) => {
    expect(service).toBeTruthy();
  }));
});
