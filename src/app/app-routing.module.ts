
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
    {
        path: "",
        component: ProductListPageComponent
    },
    {
        path: 'studentDetails',
        component: StudentDetailsComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
