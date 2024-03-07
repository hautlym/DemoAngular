import { LoginRequest } from './../../model/loginRequest';
import { Component } from '@angular/core';
import { LoginService } from '../../service/loginService.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formdata:any = {};

  constructor(private  service: LoginService, private router:Router) {

  }
  OnSubmit(){
    this.service.Login(this.formdata).subscribe({
      next: (res)=>{
        this.router.navigate(["/admin"]);
        },
      error: (err)=>{
      console.log("er", err);
        alert("Đăng nhập không thành công")
      }
    })
  }
}
