import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { AuthData } from "../models/auth-data.model";
import { Subject } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!: User;
  public authChange = new Subject<boolean>();

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    }
    this.authChange.next(true);
    this.router.navigate(['/training']);
  }

  logout() {
    // @ts-ignore
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuth() {
    return !!this.user;
  }

}
