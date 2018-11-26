import { TestBed, inject } from '@angular/core/testing';

import { NgSimpleTableService } from './ng-simple-table.service';

describe('NgSimpleTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgSimpleTableService]
    });
  });

  it('should be created', inject([NgSimpleTableService], (service: NgSimpleTableService) => {
    expect(service).toBeTruthy();
  }));
});
