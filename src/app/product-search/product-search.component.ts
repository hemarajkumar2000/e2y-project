import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce, interval, timer } from 'rxjs';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent {
  optionSelected = 'All';
  filterDropdown = new FormControl();
  searchForm: FormGroup;

  @Output()
  sortListEvent= new EventEmitter<string>();

  @Output()
  searchName= new EventEmitter<string>();

  constructor() {
    this.sortListEvent = new EventEmitter<string>;
    this.searchName = new EventEmitter<string>;
    this.searchForm = new FormGroup ({
      searchByName: new FormControl('', [])
    });
  }


  dropDownData = [
    {
      code: 'all',
      name: 'All'
    },
    {
      code: 'student',
      name: 'Student'
    },
    {
      code: 'staff',
      name: 'Staff'
    },
    {
      code: 'atoz',
      name: 'Sort By: A - Z',
    },
    {
      code: 'ztoa',
      name: 'Sort By: Z - A',
    },
  ]

  updateList(obj: any){
    this.sortListEvent.emit(this.filterDropdown.value);
  }

  searchList(){
    let search = this.searchForm.value.searchByName;
    this.searchName.emit(search)
  }
}
