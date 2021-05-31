import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Z]{1}[a-z]{1}[0-9]{4,7}[@#$%&]{2,4}'),
  ]);
  constructor() { }

  ngOnInit(): void {
  }

}
