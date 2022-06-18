import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from './errors.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const errorsService = this.injector.get(ErrorsService);
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        return console.warn('No Internet Connection');
      }
      errorsService.log(error);
      return console.error(`${error.status} - ${error.message}`);
    } else {
      errorsService.log(error);
    }
    console.error(error);
  }
}
