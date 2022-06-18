import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// const data = require('../../config')
@Injectable()
export class ConfigService {
  private config:any;
  private env: any;

  constructor(private httpClient: HttpClient) {}

  load() {
    
    return new Promise((resolve, reject) => {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          DataType: 'application/json'
        })
      };

      this.httpClient.get<{ env: string }>('../../config/env.json').subscribe(env_data => {
        debugger
        
        this.env = env_data;
        this.httpClient
          .get('../../config/' + env_data.env + '.json')
          .pipe(
            catchError((err: HttpErrorResponse) => {
              return throwError(err.error || 'Server error');
            })
          )
          .subscribe(data => {
            this.config = data;
            resolve(true);
          } , err=>{
            console.log(err , 'e')
          });
      });
    });
  }

  getEnv(key: string) {
    return this.env[key];
  }

  get(key: string) {
    return this.config[key];
  }
}
