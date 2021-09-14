import { Injectable } from '@angular/core';
import { User } from "../models/user.model";
import { AuthData } from "../models/auth-data.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!: User;
  public authChange = new Subject<boolean>();

  registerUser(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    }
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      id: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    }
    this.authChange.next(true);
  }

  logout() {
    // @ts-ignore
    this.user = null;
    this.authChange.next(false);
  }

  getUser(): User {
    return { ...this.user };
  }

  isAuth() {
    return !!this.user;
  }

}
