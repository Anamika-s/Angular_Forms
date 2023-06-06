import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _s : HttpClient) { }

  
  Get()
  {
    return this._s.get("http://localhost:3000/products/");

  }
}
