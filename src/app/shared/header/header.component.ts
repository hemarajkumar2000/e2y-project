import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { openAssessmentDialog } from '../../dialog-component/dialog-component.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header-components.scss']


})
export class HeaderComponent implements OnInit{

  companyDetails: any[] = [];

  constructor(
    private dialog: MatDialog,
  ){}

  ngOnInit(): void {
  }

  openDialog(){
    openAssessmentDialog(this.dialog);
  }
}
