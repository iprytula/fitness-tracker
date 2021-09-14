import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { AuthService } from "../../../services/auth-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>()
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

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
