import { Injectable } from '@angular/core';
import { AppUser } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users : AppUser[]=[];
  authenticatedUser : AppUser | undefined;
  constructor() { 
    this.users.push({username:"user1", password:"1234", roles:["USER"]});
    this.users.push({username:"admin", password:"1234", roles:["Admin"]});
  }
  public login(username:string, password :string):Observable<AppUser> {
    let appUser = this.users.find(u=>u.username==username);
    if(!appUser)
      return throwError(()=>new Error('User Not found'));
    if(appUser.password!=password)
      return throwError(()=>new Error('Bad Credentials'));
    return of(appUser);
  }
  public authenticateUser(user : AppUser):Observable<boolean>{
    this.authenticatedUser=user;
    localStorage.setItem("authUser", JSON.stringify({username:user.username, roles:user.roles, token : "JWT_TOKEN"}));
    return of(true);
  }
  public hasRole(role : string) :boolean {
    return this.authenticatedUser!.roles.includes(role);
  }
  public logout(){
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
  public isAuthenticated():boolean{
    return this.authenticatedUser!=undefined;
  }
}
