import { TestBed } from '@angular/core/testing';

import { AlertMessageTypesService } from './alert-message-types.service';

describe('AlertMessageTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertMessageTypesService = TestBed.get(AlertMessageTypesService);
    expect(service).toBeTruthy();
  });
});
