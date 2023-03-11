import { Iuser } from './../models/iuser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Iuser|undefined;
  constructor( ) {}
  login(username: string, password: string){
    this.currentUser={
      username:username,
      password:password
  };
  }
  logout(){
    this.currentUser=undefined;
  }
 get isuerLogin():boolean{
    if(this.currentUser?.username && this.currentUser.password){
return true;
}else{return false;}
  }

}
