import { TestBed } from '@angular/core/testing';

import { FakeparticipantserviceService } from './fakeparticipantservice.service';

describe('FakeparticipantserviceService', () => {
  let service: FakeparticipantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeparticipantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
