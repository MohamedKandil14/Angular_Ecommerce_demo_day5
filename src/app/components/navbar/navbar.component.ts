import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth:AuthService){

  }
  get  getUserName(){
    return this.auth?.currentUser?.username;
   }
 get  isuserLogin(){
    return this.auth.isuerLogin;
   }
    logout(){
    this.auth.logout();
  }


}
