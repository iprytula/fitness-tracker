import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.logInForm = this.formBuilder.group({
      email: [''],
      password: ['', Validators.minLength(6)]
    });
  }

  onSubmit() {
    if (this.logInForm.valid) {
      console.log(this.logInForm.value);
    }
  }

}
