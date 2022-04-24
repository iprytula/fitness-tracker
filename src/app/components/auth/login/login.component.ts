import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../../services/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.minLength(6)]
    });
  }

  onSubmit() {
    if (this.logInForm.valid) {
      this.authService.registerUser({
        email: this.logInForm.value['email'],
        password: this.logInForm.value['password']
      });

      console.log(this.authService.getUser());
    }
  }

}
