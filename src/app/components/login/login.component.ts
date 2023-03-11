import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authservise:AuthService,private router:Router){}
  username: string="";
  pasword: string="";
  login(){
this.authservise.login(this.username,this.pasword)
this.router.navigate(['/products'])
  }
 

}
