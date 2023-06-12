import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DepartmentComponent } from '../department/department.component';
import { EmployeeComponent } from '../employee/employee.component';
import { NocompComponent } from '../nocomp/nocomp.component';
import { DepartmentDetailComponent } from '../department-detail/department-detail.component';
import { OverviewComponent } from '../overview/overview.component';
import { ContactComponent } from '../contact/contact.component';
import { authGuard } from '../auth.guard';
const routes : Routes =
[ {path:'', component:DepartmentComponent},
  {path:'department', component:DepartmentComponent,
canActivate:[authGuard]},
  {path:'departmentdetails/:id', component:DepartmentDetailComponent,
  children:[
    {path:'overview', component:OverviewComponent},
    {path:'contact', component:ContactComponent}
  ]
  },
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