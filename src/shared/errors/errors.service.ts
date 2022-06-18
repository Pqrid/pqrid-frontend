import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, Event, NavigationError } from '@angular/router';
import * as StackTraceParser from 'error-stack-parser';

@Injectable()
export class ErrorsService {
  constructor(private injector: Injector, private router: Router) {
    // Subscribe to the NavigationError
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationError) {
        if (!navigator.onLine) {
          return;
        }
        this.log(event.error);
      }
    });
  }

  log(error: any) {
    const status = error.status || null;
    const message = error.message || error.toString();
    const stack = error instanceof HttpErrorResponse ? null : StackTraceParser.parse(error);
    console.error(status,message,stack);
  }
}
