import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', this.emailValidator],
      password: ['', [Validators.minLength(6)]],
      confirmedPassword: ['', [Validators.required, this.passwordMatchValidator]]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
  }

  private emailValidator(control: FormControl): ValidationErrors | null {
    if (control.value) {
      const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!reg.test(control.value)) {
        return { invalidEmail: true }
      } else {
        return null;
      }
    }
    return null;
  }

  private passwordMatchValidator(control: FormControl): ValidationErrors | null {
    if (control.value) {
      if (control.parent?.get('password')?.value !== control.value) {
        return { passNotMutch: true }
      } else {
        return null
      }
    }
    return null;
  }

}
