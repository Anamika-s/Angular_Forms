import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  signUpForm :  FormGroup;
  FirstName : string="";
  LastName : string="";
  Email : string ="";
  Password : string ="";
  constructor(private _fb : FormBuilder)
  {
    this.signUpForm = _fb.group({
        FirstName : new FormControl("", [Validators.required, Validators.minLength(5)]),
        LastName : new FormControl(),
        Email : new FormControl(),
        Password : new FormControl()
      }
    )
  }

  Register(signUpForm: any)
  {
    console.log(signUpForm)
  }

}
