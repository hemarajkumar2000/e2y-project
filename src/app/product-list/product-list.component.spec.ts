import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

import { SearchServiceService } from '../shared/service/search-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// describe('ProductListComponent', () => {
//   let component: ProductListComponent;
//   let fixture: ComponentFixture<ProductListComponent>;
//   let service: SearchServiceService;
//   let httpMock: HttpTestingController;
//   let dataService: jasmine.SpyObj<SearchServiceService>;

//   beforeEach(() => {
//     const dataServiceSpy = jasmine.createSpyObj('SearchServiceService', ['getAPIDetails']);
//     TestBed.configureTestingModule({
//       declarations: [ProductListComponent],
//       imports: [HttpClientTestingModule],
//       providers: [
//         SearchServiceService
//       ]

//     });
//     service = TestBed.inject(SearchServiceService);
//     httpMock = TestBed.inject(HttpTestingController);
//     fixture = TestBed.createComponent(ProductListComponent);

//     component = fixture.componentInstance;

//     dataService = TestBed.inject(SearchServiceService) as jasmine.SpyObj<SearchServiceService>;

//     dataService.getAPIDetails.and.returnValue(of({ key: 'testValue' }));
//     fixture.detectChanges();
//   });
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have myVariable', () => {

//       expect(component.searchLists).toBeDefined();
//       expect(typeof component.searchLists).toBe('object');

//       expect(component.filterLists).toBeDefined();
//       expect(typeof component.filterLists).toBe('object');

//       expect(component.defaultLists).toBeDefined();
//       expect(typeof component.defaultLists).toBe('object');

//       expect(component.studentDetails).toBeDefined();
//       expect(typeof component.studentDetails).toBe('object');

//       expect(typeof component.searchLists).toBe('object');
//       expect( component.studentList$).toBeUndefined();

//       expect(component.noImage).toEqual('assets/imagenotfound.png');
//      });

//      it('should subscribe to data service', () => {
//       expect(SearchServiceService).toHaveBeenCalled();
//     });
// });

// describe('ProductListComponent', () => {
//   let component: ProductListComponent;
//   let fixture: ComponentFixture<ProductListComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [ProductListComponent]
//     });
//     fixture = TestBed.createComponent(ProductListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

      // const variable = component.searchLists();
    //  expect(typeof component.searchLists).toEqual([]);

     //  expect(variable).toBeDefined();
