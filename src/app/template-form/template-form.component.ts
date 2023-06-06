import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  Register(regForm:any)
  {
    console.log(regForm)
    console.log(regForm.value)
    console.log(regForm.controls.txtName.value)
  }
}
