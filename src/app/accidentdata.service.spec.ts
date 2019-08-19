import { TestBed } from '@angular/core/testing';

import { AccidentdataService } from './accidentdata.service';

describe('AccidentdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccidentdataService = TestBed.get(AccidentdataService);
    expect(service).toBeTruthy();
  });
});
