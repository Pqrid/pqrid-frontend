import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { User } from './../../../models/new-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  phoneExists: boolean = false;
  user: User = new User()
  login = new FormGroup({
    firstName: new FormControl('', []),
    lastName: new FormControl('', []),
    phonenumber: new FormControl('', [Validators.required, Validators.minLength(11)]),
  })

  constructor(private _auth: AuthService) { }

  ngOnInit(): void { }

  loginFormSubmit() {
    this.getUser()
  }


  getUser() {
    const { phonenumber } = this.login.value
    this._auth.getUserByPhoneNumber(phonenumber).subscribe((x) => {
      if (!x.data) {
        this.phoneExists = true;
      }
    })
  }

  createNewUser() {
    this._auth.createNewUser(this.login.value).subscribe(x => {
      console.log(x);
    })
  }

}
