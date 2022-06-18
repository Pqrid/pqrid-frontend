import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[inputAutoFocus]',
})
export class AutoFocusDirective implements OnInit {
    constructor(private el: ElementRef) {
        if (!el.nativeElement['focus']) {
            throw new Error('Element does not accept focus.');
        }
        const input: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
        setTimeout(() => {
            input.focus();
        }, 150);
    }

    ngOnInit(): void {
  
    }
}