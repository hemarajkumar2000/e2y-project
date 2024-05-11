import { TestBed, inject } from '@angular/core/testing';

import { SearchServiceService } from './search-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ENDPOINT_URL } from '../../shared/constants';
import { searchList } from '../model/search';


describe('SearchServiceService', () => {
  let service: SearchServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchServiceService]
    });
    service = TestBed.inject(SearchServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should fetch data from API', () => {

    const mockData: searchList[] = [{
      id: 'Test Data',
      name: 'Test Data',
      dateOfBirth: 'Test Data',
      hogwartsStudent: true,
      hogwartsStaff: false,
      image: 'Test Data',
      alive: true
    }];

    service.getAPIDetails().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(ENDPOINT_URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockData); // Simulate the HTTP response
  });

  afterEach(() => {
    httpMock.verify(); // Verifies that no requests are outstanding.
  });

});

