import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpResponseHandler } from './http-response-handler.service';
import { DomainUtills } from '../../utility/domainUtills/domain-utills';

@Injectable()
export class DataService {
  private myDomain: string;
  private domainUtills = new DomainUtills();
   
  constructor(
    protected httpClient: HttpClient,
    protected responseHandler: HttpResponseHandler
  ) {
    this.myDomain = this.domainUtills.GetDomain();
  }
  
  public genericServiceCaller(
    callType: string,
    controlerActionName: string,
    data?: any
  ) {
    let apiUrl = this.myDomain + controlerActionName;
    if (callType && controlerActionName) {
      if (callType == 'post') {
        return this.httpClient
          .post(apiUrl , data)
          .pipe(
            catchError((err, source) =>
              this.responseHandler.onCatch(err, source)
            )
          );
      } else if (callType == 'get') {
        return this.httpClient
          .get(apiUrl)
          .pipe(
            catchError((err, source) =>
              this.responseHandler.onCatch(err, source)
            )
          );
      } else {
        return of('Invalid Type');
      }
    } else {
      return of('Invalid Type');
    }
  }

  public mediaUpload(files: File[]) {
    debugger
    let apiUrl = this.myDomain + 'media/upload';
    files = Array.from(files);
    let formData : FormData = new FormData();
    for(let i = 0 ; i < files.length ; i ++){
      formData.append('file', files[i] , files[i].name)
    }
    return this.httpClient.post(apiUrl, formData) ;
  }
}
