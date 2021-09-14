import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Subscription } from "rxjs";
import { AuthService } from "../../../services/auth-service.service";

@Component({
  selector: 'app-sidenav-navigation',
  templateUrl: './sidenav-navigation.component.html',
  styleUrls: ['./sidenav-navigation.component.scss']
})
export class SidenavNavigationComponent implements OnInit, OnDestroy {

  @Output() sidenavClose = new EventEmitter<void>()
  isAuth = false;
  authSubscription!: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus =>
      this.isAuth = authStatus
    );
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  logout() {
    this.authService.logout();
    this.onSidenavClose();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe()
  }

}
