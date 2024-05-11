import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from '../shared/service/search-service.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { searchList } from '../shared/model/search';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnDestroy  {

  private subscription: Subscription;

  searchLists: any[] = [];
  filterLists: any[] = [];

  defaultLists: any[] = [];

  studentDetails: any[] = [];

  noImage = 'assets/imagenotfound.png';

  studentList$ : Observable<any> | undefined;

  constructor(
    protected searchService: SearchServiceService,
    protected router: Router
  ) {
    this.studentList$ = this.searchService.getAPIDetails();
    this.subscription = this.studentList$.pipe().subscribe((data: searchList) => {
      if (data){
        let studentList: searchList = {};
        Object.entries(data).forEach(([key, value]) => {
          let imagePath = value?.image !== '' ? value?.image : this.noImage;
          studentList = {
            id: value?.id,
            name:  value?.name,
            dateOfBirth: value?.title,
            hogwartsStudent: value?.hogwartsStudent,
            hogwartsStaff: value?.hogwartsStaff,
            image: imagePath,
            alive: value?.alive,
          }
          this.defaultLists.push(studentList);
        });
      }
      this.searchLists = this.defaultLists;
      this.filterLists = this.defaultLists;
    });
  }

  navigateStudentDetails(studentId: string){
    console.log(studentId);
    this.router.navigateByUrl('studentDetails');
   }

  searchByName(searchText: string){
    this.searchLists= searchText === '' ? this.filterLists : this.filterLists.filter(p => (String(p.name).toLowerCase()).indexOf(searchText.toLowerCase()) >= 0);
  }

  sortBy(sortOption: string) {
    switch(sortOption) {
      case 'student': {
        this.searchLists = this.defaultLists.filter(list => (list.hogwartsStudent == true));
        break;
      }
      case 'staff': {
        this.searchLists = this.defaultLists.filter(list => (list.hogwartsStaff == true));
        break;
      }
      case 'atoz': {
        this.searchLists.sort((a, b) => a.name > b.name ? 1 : -1);
        break;
      }
      case 'ztoa': {
        this.searchLists.sort((b, a) => a.name > b.name ? 1 : -1);
        break;
      }
      default: {
        this.searchLists = this.defaultLists;
         break;
      }
   }
   this.filterLists = this.searchLists;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
