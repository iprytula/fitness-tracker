import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from "../../../services/auth-service.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  signUpForm!: FormGroup;
  maxDate!: Date;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      birthDate: [null],
      password: ['', [Validators.minLength(6)]],
      confirmedPassword: ['', [SignupComponent.passwordMatchValidator]],
      personalDataConsent: [null]
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.authService.registerUser({
        email: this.signUpForm.value['email'],
        password: this.signUpForm.value['password']
      });
    }
  }

  private static passwordMatchValidator(control: FormControl): ValidationErrors | null {
    if (control.value) {
      if (control.parent?.get('password')?.value !== control.value) {
        return { passNotMuch: true }
      } else {
        return null
      }
    }
    return null
  }

}
