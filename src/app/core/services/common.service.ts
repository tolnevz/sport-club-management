import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoading$ = new BehaviorSubject(false);
  isMobile$ = new BehaviorSubject(false);

  constructor() { }
}
