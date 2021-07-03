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
  maxDate!: Date;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [''],
      birthDate: [null],
      password: ['', [Validators.minLength(6)]],
      confirmedPassword: ['', [this.passwordMatchValidator]],
      personalDataConsent: [null]
    });
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
    }
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
