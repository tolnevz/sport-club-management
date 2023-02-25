import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: number): SafeHtml {
    if (value) {
      return this.sanitizer.bypassSecurityTrustHtml('<span class="customer-badge status-active">active</span>');
    }
    return this.sanitizer.bypassSecurityTrustHtml('<span class="customer-badge status-inactive">not&nbsp;active</span>');
  }

}
