import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent {
  constructor(private _router : Router) {}
  departments =[
    {"id":1, "name":"Angular1"},
    {"id":2, "name":"Angular2"},
    {"id":3, "name":"Angular3"}
  ]

  select(id: any)
  {
    console.log(id)
    this._router.navigate(["/departmentdetails/" + 
    id])
  }
}
