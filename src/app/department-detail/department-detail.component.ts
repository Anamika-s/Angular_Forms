import { Component , OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent  implements OnInit{
/**
 *
 */
constructor(private _route : ActivatedRoute, private _router: Router) {
  
  
}
id: number=0;
ngOnInit(): void {
  this.id = this._route.snapshot.params["id"];
  console.log("In Dep details " + this.id)
this._router.navigate(["/departmentdetails/"+ this.id])
}
GoNext()
{
 this.id++;
 console.log("In Dep details " + this.id)
 this._router.navigate(["/departmentdetails/"+ this.id])

}
GoPrev()
{
  this.id--;
  console.log("In Dep details " + this.id)
  this._router.navigate(["/departmentdetails/"+ this.id])

}
}
