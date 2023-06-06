import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';
import { NocompComponent } from '../nocomp/nocomp.component';
import { DepartmentDetailComponent } from '../department-detail/department-detail.component';
const routes : Routes =
[ {path:'', component:DepartmentComponent},
  {path:'department', component:DepartmentComponent},
  {path:'departmentdetails/:id', component:DepartmentDetailComponent},
  {path:'employee', component: EmployeeComponent},
  {path:'**', component: NocompComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
export const Components = [DepartmentComponent, EmployeeComponent,NocompComponent];