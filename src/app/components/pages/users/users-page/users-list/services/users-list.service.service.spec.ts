import { TestBed } from '@angular/core/testing';

import { UsersListService } from './users-list.service';

describe('UsersListServiceService', () => {
  let service: UsersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
