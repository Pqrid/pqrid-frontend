import { Injectable } from '@angular/core';
import { REQUESTTYPE } from '../enums/request-type.enum';
import { DataService } from './../../shared/async-services/http/data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _main: DataService) { }

  getUserByPhoneNumber(phonenumber: number): Observable<any> {
    return this._main.genericServiceCaller(REQUESTTYPE.GET, `users/getUserByPhoneNumber/${phonenumber}`);
  }

  createNewUser(payload: any) {
    return this._main.genericServiceCaller(REQUESTTYPE.POST, 'users/addUser', payload);
  }

}
